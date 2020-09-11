import React from 'react';
import './navigation.css'
import { Pivot, ICommandBarItemProps, PivotItem, Label, IStyleSet, ILabelStyles, CommandBar } from '@fluentui/react'
import TaskDay from '../tasksday/taskday';
import { type } from 'os';


export class Task {
    name: string = '';
    className: string = 'taskCardHeader';
    type: number = 0;
    key: string = '';
}

function addTasks(count: number): Task[] {
    const tasks: Task[] = [];
    for (var i = 0; i < count; i++) {
        tasks.push({
            key: i.toString(),
            name: 'Task ' + i,
            className: 'taskCardHeader',
            type: getRandomIntInclusive(1,3),
        })
    }

    return tasks;
}

function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
}

export class Day {
    tasks: Task[] = [];
    name: string = "";
    key: number = 0;
}

const days: Day[] = [{
    name: 'Lunedì 21 Ago ',
    tasks: addTasks(100),
    key: 0,
}, {
    name: 'Martedì 22 Ago',
    tasks: addTasks(30),
    key: 1,
},
{
    name: 'Mercoledì 23 Ago',
    tasks: addTasks(10),
    key: 2,
}, {
    name: 'Giovedì 24 Ago',
    tasks: addTasks(40),
    key: 3,
}, {
    name: 'Venerdì 25 Ago',
    tasks: addTasks(3),
    key: 4,
}, {
    name: 'Sabato 26 Ago',
    tasks: addTasks(22),
    key: 5,
}];

class MenuItem {
    title = '';
}

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
    root: { marginTop: 10 },
};

const menuItems: ICommandBarItemProps[] = [
    { name: 'Agenda', key: 'tasks' },
    { name: 'Da Fare', key: 'todo' },
    { name: 'Chiamate', key: 'chiamate' },
]

function Navigation() {
    return (
        <nav>
            <Pivot aria-label="Basic Pivot Example">
                <PivotItem
                    headerText="Agenda"
                    headerButtonProps={{
                        'data-order': 1,
                        'data-title': 'Agenda',
                    }}
                >
                    <CommandBar items={[]}></CommandBar>
                    <div className="ms-Grid" dir="ltr">
                        <div className="ms-Grid-row">
                            {days.length > 0 ? days.map((day: any) => (
                                <div key={day.name} className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                                    <TaskDay day={day} />
                                </div>
                            )) :
                                <Label>Days list is empty...</Label>}
                        </div>
                    </div>
                </PivotItem>
                <PivotItem headerText="Da Fare">
                    <Label styles={labelStyles}>Da fare</Label>
                </PivotItem>
                <PivotItem headerText="Chiamate">
                    <Label styles={labelStyles}>Chiamate</Label>
                </PivotItem>
            </Pivot>
        </nav>
    );
}

export default Navigation;