import React, {useState} from "react";
import Affairs from "./affairs/Affairs";
import s2 from "../../s1-main/App.module.css";

/*
* ✅1 - описать типы AffairPriorityType , AffairType
* ✅2 - указать нужный тип для defaultAffairs
* ✅3 - дописать типы и логику функции filterAffairs и проверить её тестами
* ✅4 - выполнить пункт 3 для функции deleteAffair
* ✅5 - указать нужный тип в useState с affairs
* ✅6 - дописать тип и логику функции deleteAffairCallback
* ✅7 - в файле Affairs.tsx дописать типизацию пропсов
* ✅8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow
* ✅9 - в файле Affair.tsx дописать типизацию пропсов
* ✅10 - в файле Affair.tsx дописать функции deleteCallback и использовать
* ✅11 - в файле Affair.tsx отобразить приходящие данные
* */

// types
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}

export type AffairPriorityType = "low" | "middle" | "high";

export type FilterType = "all" | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
    {_id: 1, name: "React", priority: "high"}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if (filter === "all") return affairs;
    return affairs.filter(affair => affair.priority === filter);// need to fix
};
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(affair => affair._id !== _id); // need to fix
};

function HW2() {

    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs); // need to fix any
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs: AffairType[] = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number): void => {
        setAffairs(deleteAffair(affairs, _id));
    };

    return (
        <div id={"hw2"}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    );
}

export default HW2;
