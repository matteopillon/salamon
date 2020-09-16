import React, { FunctionComponent } from 'react';
import { Stack, Image, DefaultEffects, Text, Panel, ImageFit, IImageProps, initializeIcons, TextField } from '@fluentui/react'
import { useBoolean } from '@uifabric/react-hooks';

import './task-item3gg.css'
import { Task } from '../navigation/navigation';;

type TaskProp = {
    task: Task
}

function getTypefromNumber(type: number) {
    switch (type) {
        case 2:
            return 'App.to di Vendita';
        case 3:
            return 'App.to di Acquisto';
        default:
            return 'Incontro con Fornitore';
    }
}

function getClassfromNumber(type: number) {
    switch (type) {
        case 2:
            return 'taskCardHeaderYellow';
        case 3:
            return 'taskCardHeaderGreen';
        default:
            return 'taskCardHeaderBlue';
    }
}

const imageProps: Partial<IImageProps> = {
    imageFit: ImageFit.centerContain,
    width: 200,
    height: 200
};

// Initialize icons in case this example uses them
initializeIcons();

const TaskItem3gg: FunctionComponent<TaskProp> = ({ task, children }) => {
    const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(false);
    const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
    return (
        <div key={task.key} className="taskCard" style={{ boxShadow: DefaultEffects.elevation16 }} >
            <div className={getClassfromNumber(task.type)}>
                <div className="taskCardContent " onMouseEnter={toggleIsCalloutVisible} onMouseLeave={toggleIsCalloutVisible} onClick={openPanel}>
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
                            <Stack horizontal gap='10px'>
                                <Text variant="small" >10:30 - 12:30</Text>
                                <Text variant="small" style={{ fontWeight: 'bold' }} >{getTypefromNumber(task.type)}</Text><br />
                            </Stack>


                            <Text variant="small" >Gabriele,Mattea</Text><br />
                            <Text variant="small" >Imm. Fantino Damiano in via Marco Polo</Text><br />
                        </div>
                        <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
                            <Text variant="small" >Informazione 1</Text><br />
                            <Text variant="small" >Informazione 2</Text><br />

                        </div>
                    </div>
                </div>


            </div>
            <Panel
                headerText={getTypefromNumber(task.type)}
                isOpen={isOpen}
                onDismiss={dismissPanel}
                // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
                closeButtonAriaLabel="Close"
                isLightDismiss
            >
                <Stack gap='1px'>
                    <Text variant="medium" >10:30 - 12:30</Text>
                    <Text variant="large" style={{ fontWeight: 'bold' }} ></Text><br />

                    <TextField label="Testo" ></TextField>
                    <Text variant="medium" >Gabriele,Mattea</Text><br />
                    <Text variant="medium" >Imm. Fantino Damiano in via Marco Polo</Text><br />
                    <Image  {...imageProps} src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
                        alt='Immagine di prova'
                    />
                    <Text variant="medium" >Informazione 1</Text><br />
                    <Text variant="medium" >Informazione 2</Text><br />
                </Stack>


            </Panel>
        </div >

    );
}


export default TaskItem3gg;
