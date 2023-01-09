import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

let privatekey = process.env.GOOGLE_PRIVATE_KEY?.replace(new RegExp('\\\\n', 'g'), '\n'); // Removing extra slashes that are added on the string.
let jwtClient = new google.auth.JWT(process.env.GOOGLE_CLIENT_EMAIL, '', privatekey, ['https://www.googleapis.com/auth/calendar.readonly']);

type Data = {
  name: string;
};

const getCalendarEvents = function () {
  let calendar = google.calendar('v3');
  return new Promise((resolve, reject) => {
    calendar.events.list(
      {
        auth: jwtClient,
        calendarId: process.env.GOOGLE_CALENDAR_ID,
        timeMin: new Date().toISOString(),
        maxResults: 20,
        singleEvents: true,
        orderBy: 'startTime',
      },
      (error, result) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          if (result?.data.items?.length) {
            const rawData = result.data.items;
            resolve(rawData);
          } else {
            resolve(false);
          }
        }
      }
    );
  });
};

const parseCalendarEvents = async (rawCalendarData: []) => {
  console.log('Parsing events from Raw Data');

  const events: CalendarResponseType[] = [];
  let i = 0;
  const showNumberOfdays = 5;
  const startFromDate = addDaysToDate(new Date(), 2); // Add days here

  while (i < rawCalendarData.length || events.length < showNumberOfdays) {
    if (rawCalendarData[i]) {
      let eventDateObject = new Date(rawCalendarData[i]['start']['dateTime']);

      if (eventDateObject >= startFromDate) {
        let eventDate = eventDateObject.toLocaleDateString('sv-SE');
        let startTime = eventDateObject.toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' });

        if (dateNotAdded(eventDate)) {
          if (events.length < showNumberOfdays) {
            events.push({ date: eventDate, dateEvents: [{ time: startTime, duration: 1000, milliseconds: eventDateObject.getTime() }] });
          }
        } else {
          addToDate(eventDate, { time: startTime, duration: 1000, milliseconds: eventDateObject.getTime() });
        }
      }
    } else {
      break;
    }
    i++;
  }

  return events;

  function addDaysToDate(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    date.setHours(10);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    return date;
  }

  function dateNotAdded(date: string): boolean {
    for (let k in events) {
      if (events[k].date === date) {
        return false;
      }
    }
    return true;
  }

  function addToDate(date: string, dateEvent: { time: string; duration: number; milliseconds: number }) {
    for (let k in events) {
      if (events[k].date === date) {
        events[k].dateEvents.push(dateEvent);
      }
    }
  }
};

export async function getCalendarData() {
  console.log('Reading calendar data from GOOGLE');

  return getCalendarEvents()
    .then(async (response: any) => {
      return await parseCalendarEvents(response);
    })
    .catch(error => {
      console.log(error);

      return error;
    });
}

export type CalendarResponseType = {
  date: string;
  dateEvents: [
    {
      time: string;
      duration: number;
      milliseconds: number;
    }
  ];
};

export type CalendarDataType = {
  date: string;
  time: string;
  duration: number;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json(await getCalendarData());
}
