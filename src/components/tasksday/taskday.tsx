import React, { FunctionComponent, useState } from 'react';
import { Stack, Label, DefaultEffects, Text, Separator, ITextStyles, Callout, getTheme, mergeStyleSets, FontWeights, Link, DefaultButton, TagItem, IStackTokens } from '@fluentui/react'
import { useBoolean, useId } from '@uifabric/react-hooks';

import './taskday.css'
import { Day, Task } from '../navigation/navigation';
import App from '../app/app';
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
