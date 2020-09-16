import React, { CSSProperties } from 'react';
import './todo-list.css'
import {  IColumn, Fabric, DetailsList, TextField, Selection, SelectionMode, DetailsListLayoutMode, mergeStyleSets, Modal, getTheme, FontWeights, IconButton, IIconProps, IDatePickerStrings, DatePicker, DayOfWeek, Dropdown, IDropdownStyles, DefaultButton, PrimaryButton, IButtonProps, ICommandBarItemProps, CommandBar } from '@fluentui/react'
const theme = getTheme();

const cancelIcon: IIconProps = { iconName: 'Cancel' };

const DropdownControlledMultiExampleOptions = [
  { key: 'mattea', text: 'Mattea' },
  { key: 'gabriele', text: 'Gabriele' },
  { key: 'antonio', text: 'Antonio' },
];

const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 300 } };

const classNames = mergeStyleSets({
  fileIconHeaderIcon: {
    padding: 0,
    fontSize: '16px',
  },
  fileIconCell: {
    textAlign: 'center',
    selectors: {
      '&:before': {
        content: '.',
        display: 'inline-block',
        verticalAlign: 'middle',
        height: '100%',
        width: '0px',
        visibility: 'hidden',
      },
    },
  },
  fileIconImg: {
    verticalAlign: 'middle',
    maxHeight: '16px',
    maxWidth: '16px',
  },
  controlWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  exampleToggle: {
    display: 'inline-block',
    marginBottom: '10px',
    marginRight: '30px',
  },
  selectionDetails: {
    marginBottom: '20px',
  },
  container: {
   
  },
  header: [

    theme.fonts.xLargePlus,
    {
      flex: '1 1 auto',
      borderTop: `4px solid ${theme.palette.themePrimary}`,
      color: theme.palette.neutralPrimary,
      display: 'flex',
      alignItems: 'center',
      fontWeight: FontWeights.semibold,
      padding: '12px 12px 14px 24px',
    },
  ],
  body: {
    flex: '4 4 auto',
    padding: '0 24px 24px 24px',
    overflowY: 'hidden',
    selectors: {
      p: { margin: '14px 0' },
      'p:first-child': { marginTop: 0 },
      'p:last-child': { marginBottom: 0 },
    },
  },
});

const DayPickerStrings: IDatePickerStrings = {
  months: [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
  ],

  shortMonths: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],

  days: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],

  shortDays: ['D', 'L', 'M', 'M', 'G', 'V', 'S'],

  goToToday: 'Oggi',
  prevMonthAriaLabel: 'Mese precedente',
  nextMonthAriaLabel: 'Mese prossimo',
  prevYearAriaLabel: 'Anno precedente',
  nextYearAriaLabel: 'Anno prossimo',
  closeButtonAriaLabel: 'Chiudi',
  monthPickerHeaderAriaLabel: '{0}, Seleziona per cambiare l\'anno',
  yearPickerHeaderAriaLabel: '{0}, Seleziona per cambiare il mese',
};

const _commandItems: ICommandBarItemProps[] = [
  {
    key: 'newItem',
    text: 'Nuovo',
    cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
    iconProps: { iconName: 'Add' },
    subMenuProps: {
      items: [
        {
          key: 'emailMessage',
          text: 'Nuovo Appuntamento di vendita',
          iconProps: { iconName: 'Mail' },
          // ['data-automation-id']: 'newEmailButton', // optional
        },
        {
          key: 'calendarEvent',
          text: 'Nuovo Appuntamento di acquisto',
          iconProps: { iconName: 'Calendar' },
        },
      ],
    },
  },
  {
    key: 'upload',
    text: 'Upload',
    iconProps: { iconName: 'Upload' },
    href: 'https://developer.microsoft.com/en-us/fluentui',
  },
  {
    key: 'share',
    text: 'Share',
    iconProps: { iconName: 'Share' },
    onClick: () => console.log('Share'),
  },
  {
    key: 'download',
    text: 'Download',
    iconProps: { iconName: 'Download' },
    onClick: () => console.log('Download'),
  },
];

const _overflowItems: ICommandBarItemProps[] = [
  { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
  { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
  { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } },
];

const _farItems: ICommandBarItemProps[] = [
  {
    key: 'tile',
    text: 'Grid view',
    // This needs an ariaLabel since it's icon-only
    ariaLabel: 'Grid view',
    iconOnly: true,
    iconProps: { iconName: 'Tiles' },
    onClick: () => console.log('Tiles'),
  },
  {
    key: 'info',
    text: 'Info',
    // This needs an ariaLabel since it's icon-only
    ariaLabel: 'Info',
    iconOnly: true,
    iconProps: { iconName: 'Info' },
    onClick: () => console.log('Info'),
  },
];


const controlClass = mergeStyleSets({
  control: {
    margin: '0 0 15px 0',
    maxWidth: '300px',
  },
});

const overflowProps: IButtonProps = { ariaLabel: 'Altri comandi' };

// const dragOptions: IDragOptions = {
//   moveMenuItemText: 'Move',
//   closeMenuItemText: 'Close',
//   menu: ContextualMenu,
// };

const contentStyles = mergeStyleSets({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch',
  },
  header: [
    theme.fonts.xLargePlus,
    {
      flex: '1 1 auto',
      borderTop: `4px solid ${theme.palette.themePrimary}`,
      color: theme.palette.neutralPrimary,
      display: 'flex',
      alignItems: 'center',
      fontWeight: FontWeights.semibold,
      padding: '12px 12px 14px 24px',
    },
  ],
  body: {
    flex: '4 4 auto',
    padding: '0 24px 24px 24px',
    overflowY: 'hidden',
    selectors: {
      p: { margin: '14px 0' },
      'p:first-child': { marginTop: 0 },
      'p:last-child': { marginBottom: 0 },
    },
  },
});

// const toggleStyles = { root: { marginBottom: '20px' } };
const iconButtonStyles = {
  root: {
    color: theme.palette.neutralPrimary,
    marginLeft: 'auto',
    marginTop: '4px',
    marginRight: '2px',
  },
  rootHovered: {
    color: theme.palette.neutralDark,
  },
};

const controlStyles = {
  root: {
    margin: '0 30px 20px 0',
    maxWidth: '300px',
  },
};

const badgeStyles : CSSProperties = {
  width: 16,
  height: 16,
};

export class ToDo {
  description: string = '';
  agent: string = '';
  date: Date = new Date();
  className: string = 'taskCardHeader';
  type: number = 0;
  key: string = '';
}


function addToDo(count: number): ToDo[] {
  const todos: ToDo[] = [];
  for (var i = 0; i < count; i++) {
    todos.push({
      key: i.toString(),
      agent: 'Mattea',
      date: new Date(),
      description: 'Task ' + i,
      className: 'taskCardHeader',
      type: getRandomIntInclusive(1, 3),
    })
  }

  return todos;
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

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
}

// const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
//   root: { marginTop: 10 },
// };


export interface IToDosListState {
  columns: IColumn[];
  items: ToDo[];
  selectionDetails: string;
  isCompactMode: boolean;
  openedToDo?: ToDo;
  selectedKeys: string[]
}




export class ToDoList extends React.Component<{}, IToDosListState> {
  private _selection: Selection;
  private _allItems: ToDo[];
  private firstDayOfWeek = DayOfWeek.Monday;

  constructor(props: {}) {
    super(props);


    this._allItems = _generateDocuments();

    const columns: IColumn[] = [
      {
        key: 'column0',
        name: ' ',
        fieldName: 'type',
        minWidth: 20,
        maxWidth: 20,
        isRowHeader: false,
        isResizable: false,
        isSorted: true,
        isSortedDescending: false,
        sortAscendingAriaLabel: 'Sorted A to Z',
        sortDescendingAriaLabel: 'Sorted Z to A',
        onColumnClick: this._onColumnClick,
        data: 'string',
        onRender: (item: ToDo) => {
          return <div style={badgeStyles} className={getClassfromNumber(item.type)}><span></span> </div>;
        },
        isPadded: true,
      },
      {
        key: 'column2',
        name: 'Descrizione',
        fieldName: 'description',
        minWidth: 210,
        maxWidth: 350,
        isRowHeader: true,
        isResizable: true,
        isSorted: true,
        isSortedDescending: false,
        sortAscendingAriaLabel: 'Sorted A to Z',
        sortDescendingAriaLabel: 'Sorted Z to A',
        onColumnClick: this._onColumnClick,
        data: 'string',
        onRender: (item: ToDo) => {
          return <div >{item.description.toString()}</div>;
        },
        isPadded: true,
      },
      {
        key: 'column3',
        name: 'Date Modified',
        fieldName: 'dateModifiedValue',
        minWidth: 120,
        maxWidth: 150,
        isResizable: true,
        onColumnClick: this._onColumnClick,
        data: 'date',
        onRender: (item: ToDo) => {
          return <span >{item.date.toLocaleString()}</span>;
        },
        isPadded: true,
      },
      {
        key: 'column4',
        name: 'Modified By',
        fieldName: 'modifiedBy',
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        isCollapsible: true,
        data: 'string',
        onColumnClick: this._onColumnClick,
        onRender: (item: ToDo) => {
          return <span>{item.agent}</span>;
        },
        isPadded: true,
      },
    ];

    this._selection = new Selection({
      onSelectionChanged: () => {
        this.setState({
          selectionDetails: this._getSelectionDetails(),
        });
      },
    });

    this.state = {
      items: this._allItems,
      columns: columns,
      selectionDetails: this._getSelectionDetails(),
      isCompactMode: false,
      openedToDo: undefined,
      selectedKeys: []
    };
  }
  private onChangeDescriptioFieldValue
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) {
    if (this.state.openedToDo) {
    //  this.state.openedToDo.description = (newValue || '')
    }
  }

  public render() {
    const { columns, isCompactMode, items } = this.state;

    return (
      <Fabric className={classNames.container}>
        <div>

        </div>
        <div className={classNames.controlWrapper}>

          <TextField label="Filtra:" onChange={this._onChangeText} styles={controlStyles} />

        </div>
        <div className={classNames.container}>
          <CommandBar
            items={_commandItems}
            overflowItems={_overflowItems}
            overflowButtonProps={overflowProps}
            farItems={_farItems}
            ariaLabel=""
          />
        </div>
        {/* <div className={classNames.selectionDetails}>{selectionDetails}</div> */}
        <div >
          <DetailsList
            items={items}
            compact={isCompactMode}
            columns={columns}
            selectionMode={SelectionMode.none}
            getKey={this._getKey}
            setKey="none"
            layoutMode={DetailsListLayoutMode.justified}
            isHeaderVisible={true}
            onItemInvoked={this._onItemInvoked.bind(this)}
          />
        </div>
        <Modal
          titleAriaId={this.state.openedToDo?.key}
          isOpen={this.state.openedToDo !== undefined}
          onDismiss={this.hideModal.bind(this)}
          isBlocking={false}
          containerClassName={contentStyles.container}
          dragOptions={undefined}
        >
          <div className={contentStyles.header}>
            <span id={this.state.openedToDo?.key}>{this.state.openedToDo?.description}</span>
            <IconButton
              styles={iconButtonStyles}
              iconProps={cancelIcon}
              ariaLabel="Close popup modal"
              onClick={this.hideModal.bind(this)}
            />
          </div>
          <div className={contentStyles.body}>
            <TextField label="Descrizione" defaultValue={this.state.openedToDo?.description} onChange={this.onChangeDescriptioFieldValue.bind(this)} ></TextField>
            <DatePicker
              label="Data"
              value={this.state.openedToDo?.date}
              className={controlClass.control}
              firstDayOfWeek={this.firstDayOfWeek}
              strings={DayPickerStrings}
              placeholder="Seleziona una data..."
              ariaLabel="Data"
            />
            <Dropdown
              placeholder="Seleziona agente"
              label="Agente"
              defaultSelectedKeys={this.state.selectedKeys}
              // eslint-disable-next-line react/jsx-no-bind
              // onChange={onChange}
              multiSelect
              options={DropdownControlledMultiExampleOptions}
              styles={dropdownStyles}
            />
            <br />
            <DefaultButton text="Annulla" onClick={this.hideModal.bind(this)} allowDisabledFocus />
            <span>    </span>
            <PrimaryButton text="Conferma" onClick={this.hideModal.bind(this)} allowDisabledFocus />

          </div>
        </Modal>
      </Fabric>
    );
  }

  public componentDidUpdate(previousProps: any, previousState: IToDosListState) {
    // if (previousState.isModalSelection !== this.state.isModalSelection && !this.state.isModalSelection) {
    //   this._selection.setAllSelected(false);
    // }
  }

  private _getKey(item: any, index?: number): string {
    return item.key;
  }

  // private _onChangeCompactMode = (ev: React.MouseEvent<HTMLElement>, checked: boolean): void => {
  //   this.setState({ isCompactMode: checked });
  // };

  // private _onChangeModalSelection = (ev: React.MouseEvent<HTMLElement>, checked: boolean): void => {
  //   this.setState({ isModalSelection: checked });
  // };

  private _onChangeText = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text?: string): void => {
    this.setState({
      items: text ? this._allItems.filter(i => i.description.toLowerCase().indexOf(text) > -1) : this._allItems,
    });
  };

  private _onItemInvoked(item: ToDo) {
    this.setState({
      openedToDo: item,
      selectedKeys: [item.agent.toLowerCase()]
    },
    );
    // alert(`Item invoked: ${item.description}`);
  }

  private hideModal() {
    this.setState({
      openedToDo: undefined
    },
    );
  }

  private _getSelectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return 'No items selected';
      case 1:
        return '1 item selected: ' + (this._selection.getSelection()[0] as ToDo).description;
      default:
        return `${selectionCount} items selected`;
    }
  }

  private _onColumnClick = (ev: React.MouseEvent<HTMLElement>, column: IColumn): void => {
    const { columns, items } = this.state;
    const newColumns: IColumn[] = columns.slice();
    const currColumn: IColumn = newColumns.filter(currCol => column.key === currCol.key)[0];
    newColumns.forEach((newCol: IColumn) => {
      if (newCol === currColumn) {
        currColumn.isSortedDescending = !currColumn.isSortedDescending;
        currColumn.isSorted = true;
        
      } else {
        newCol.isSorted = false;
        newCol.isSortedDescending = true;
      }
    });
    const newItems = _copyAndSort(items, currColumn.fieldName!, currColumn.isSortedDescending);
    this.setState({
      columns: newColumns,
      items: newItems,
    });
  };
}

function _copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
  const key = columnKey as keyof T;
  return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
}

function _generateDocuments() {

  return addToDo(20);
}