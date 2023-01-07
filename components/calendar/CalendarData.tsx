import Link from 'next/link';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { CalendarResponseType } from '../../pages/api/calendar';

const wait = (ms: number) => new Promise(rs => setTimeout(rs, ms));

const Loading = () => {
  const Skeleton = () => {
    return (
      <div className="mb-4">
        <div className="flex justify-between lg:flex-col lg:gap-y-2">
          <button className="rounded-md animate-pulse bg-green-dark/10 text-green-dark/10 px-3 py-2 lg:px-6 w-32 h-6 mb-3 mt-2"></button>
          <button className="rounded-md animate-pulse bg-green-dark/10 text-green-dark/10 px-3 py-2 lg:px-6 w-32 h-12"></button>
          <button className="rounded-md animate-pulse bg-green-dark/10 text-green-dark/10 px-3 py-2 lg:px-6 h-12"></button>
          <button className="rounded-md animate-pulse bg-green-dark/10 text-green-dark/10 px-3 py-2 lg:px-6 h-12"></button>
        </div>
      </div>
    );
  };
  return (
    <section className="mb-24 lg:mb-48">
      <div className="lg:flex lg:justify-center lg:gap-x-5">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
      <div className="text-center uppercase text-offwhite/50">Laddar lediga tider...</div>
    </section>
  );
};

const formatDate = (date: Date) => {
  const formatWeekDay = (weekday: string) => {
    let outputWeekday = weekday.slice(0, 3);
    outputWeekday = outputWeekday.slice(0, 1).toUpperCase() + outputWeekday.slice(1);
    return outputWeekday;
  };
  const weekday = date.toLocaleDateString('sv-SE', { weekday: 'short' });
  const day = date.toLocaleDateString('sv-SE', { day: '2-digit' });
  const month = date.toLocaleDateString('sv-SE', { month: '2-digit' });

  return `${formatWeekDay(weekday)} ${Number(day)}/${Number(month)}`;
};

export default function CalendarData(props: { setOpenSlot: Dispatch<SetStateAction<number>> }) {
  const [calendarData, setCalendarData] = useState<CalendarResponseType[]>();
  let { setOpenSlot } = props;

  useEffect(() => {
    const fetchCalendar = async () => {
      const calendarData = await (await fetch('/api/calendar')).json();

      setCalendarData(calendarData);
    };
    fetchCalendar();
  }, []);

  return (
    <>
      {calendarData ? (
        <section className="mb-24 lg:mb-48">
          <div className="lg:flex lg:justify-center lg:gap-x-5">
            {calendarData.map(item => {
              return (
                <div key={item.date} className="mb-4">
                  <h3 className="mb-1 text-3xl lg:mb-4 lg:text-center">{formatDate(new Date(item.date))}</h3>
                  <div className="flex justify-start gap-x-2 lg:flex-col lg:gap-y-2">
                    {item.dateEvents.map(event => {
                      return (
                        <Link href="/boka-tatueringstid" key={event.time} onClick={() => setOpenSlot(event.milliseconds)} className="rounded-md bg-green-dark px-3 py-2 lg:px-6">
                          kl. {event.time}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
