"use client";

import { FC, useMemo } from "react";
import clsx from "clsx";
import {
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isToday,
    startOfMonth,
} from "date-fns";
import Image from "next/image";

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

interface Event {
    date: Date;
    title: string;
    img: string;
    type: string;
}

const events: Event[] = [
    { date: new Date(2024, 6, 5), title: 'Green Horizons Community Tree Planting Day', img: '/event.png', type: 'green' },
    { date: new Date(2024, 6, 15), title: 'Green Horizons Community Tree Planting Day', img: '/event.png', type: 'blue' },
    { date: new Date(2024, 6, 31), title: 'Green Horizons Community Tree Planting Day', img: '/event.png', type: 'yellow' },
];

const AgendaPage: FC = () => {
    const currentDate = new Date(2024, 6);
    const firstDayOfMonth = startOfMonth(currentDate);
    const lastDayOfMonth = endOfMonth(currentDate);

    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth,
    });

    const startingDayIndex = getDay(firstDayOfMonth);

    const eventsByDate = useMemo(() => {
        return events.reduce((acc: { [key: string]: Event[] }, event) => {
            const dateKey = format(event.date, "yyyy-MM-dd");
            if (!acc[dateKey]) {
                acc[dateKey] = [];
            }
            acc[dateKey].push(event);
            return acc;
        }, {});
    }, [events]);

    return (
        <div className="flex flex-col gap-3 w-full p-4">
            <div className="flex justify-between text-2xl mb-5">
                <h1>Agenda</h1>
            </div>
            <div className="grid  grid-cols-7">
                {WEEKDAYS.map((day) => (
                    <div key={day} className="py-4 border-t border-r border-l border-gray font-bold text-center">
                        {day}
                    </div>
                ))}
                {Array.from({ length: startingDayIndex }).map((_, index) => (
                    <div key={`empty-${index}`} className="border border-gray p-2 text-center" />
                ))}
                {daysInMonth.map((day, index) => {
                    const dateKey = format(day, "yyyy-MM-dd");
                    const todaysEvents = eventsByDate[dateKey] || [];
                    return (
                        <div
                            key={index}
                            className={clsx("border text-gray border-gray h-[190px] p-2 text-center", {
                                "bg-gray-200": isToday(day),
                                "text-gray-900": isToday(day),
                            })}
                        >
                            {format(day, "d")}
                            {todaysEvents.map((event) => (
                                <div
                                    key={event.title}
                                    className={clsx("mt-2 p-2 rounded-lg flex flex-col justify-center items-center", {
                                        "bg-green200 text-green300": event.type === "green",
                                        "bg-blue200 text-blue300": event.type === "blue",
                                        "bg-yellow200 text-yellow300": event.type === "yellow",
                                    })}
                                >
                                    <Image src={event.img} width={40} height={40} className="nb-2 rounded-full" alt="event" />
                                    {event.title}
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AgendaPage;
