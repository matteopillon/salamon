import React, { FunctionComponent } from 'react';
import { Stack, Label, Text, Separator, IStackTokens } from '@fluentui/react'

import './taskday.css'
import { Day, Task } from '../navigation/navigation';
import TaskItem from '../task-item/task-item';

type TaskDayProp = {
    day: Day
}

const stackTokens: IStackTokens = { childrenGap: 5 };

const TaskDay: FunctionComponent<TaskDayProp> = ({ day, children }) => {
    return (
        <>
            <div >
                
                <div>
                    <Text variant="large" >{day.name}</Text>
                </div>
               
                <Separator >
                <Stack horizontal gap="2px" horizontalAlign="center" tokens={stackTokens}>
                    <Text className="badge-green" variant="small">10</Text>
                    <Text className="badge-yellow" variant="small">5</Text>
                    <Text className="badge-blue"variant="small">2</Text>

                </Stack>
                </Separator>
                <div>
                    <Stack gap='10'>
                        {day.tasks.length > 0 ? day.tasks.map((task: 
                        Task) => (
                            <TaskItem task={task}></TaskItem>
                        )) :
                            <Label>Nessun evento</Label>}



                    </Stack>
                </div>
            </div>
        </>
    );
}


export default TaskDay;
