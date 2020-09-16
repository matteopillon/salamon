import React from 'react';
import './navigation.css'
import { Pivot, PivotItem, Label, CommandBar, PivotLinkFormat, PivotLinkSize } from '@fluentui/react'
import TaskDay from '../tasksday/taskday'
import TaskDay3gg from '../tasksday3gg/taskday3gg'
import { ToDoList } from '../todos/todo-list';

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
            type: getRandomIntInclusive(1, 3),
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

// const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
//     root: { marginTop: 10 },
// };

function Navigation() {
    return (
        <div>
            <div role="tabpanel"
        style={{
          float: 'left',
          height: 60,
          padding: 5,
          fontSize: 30,
          fontWeight: "bold",
          margin: "20 0 0 0"
        }}>Salamon</div>
            <Pivot aria-label="Basic Pivot Example"
                linkFormat={PivotLinkFormat.tabs}
                linkSize={PivotLinkSize.large}>
                <PivotItem
                    headerText="Agenda"
                    headerButtonProps={{
                        'data-order': 1,
                        'data-title': 'Agenda',
                    }}
                >
                    <Pivot aria-label="Basic Pivot Example">

                        <PivotItem
                            headerText="3 Giorni"
                            headerButtonProps={{
                                'data-order': 1,
                                'data-title': 'Agenda 3gg',
                            }}
                        >
                            <CommandBar items={[]}></CommandBar>
                            <div className="ms-Grid" dir="ltr">
                                <div className="ms-Grid-row">
                                    {days.length > 0 ? days.slice(0, 3).map((day: any) => (
                                        <div key={day.name} className="ms-Grid-col ms-sm6 ms-md2 ms-lg4">
                                            <TaskDay3gg day={day} />
                                        </div>
                                    )) :
                                        <Label>Days list is empty...</Label>}
                                </div>
                            </div>
                        </PivotItem>
                        <PivotItem
                            headerText="Settimana"
                            headerButtonProps={{
                                'data-order': 2,
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
                    </Pivot>
                </PivotItem>
                <PivotItem headerText="Da Fare">
                    <ToDoList />
                </PivotItem>
                {/* <PivotItem headerText="Chiamate">
                    <Label styles={labelStyles}>Chiamate</Label>
                </PivotItem> */}
            </Pivot>
        </div>
    );
}

export default Navigation;