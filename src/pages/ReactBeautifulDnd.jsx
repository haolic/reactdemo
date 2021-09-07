import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const list = [1111, 2222, 3333, 4444];

const ReactBeautifulDnd = () => {
  const onDragEnd = (res) => {
    console.log(res);
  };
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board">
          {(provided) => {
            return (
              <div
                style={{ border: '1px solid #000' }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {list.map((el, index) => {
                  return (
                    <Draggable
                      key={el.toString()}
                      draggableId={el.toString() + 1}
                      index={index}
                    >
                      {(provided) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              border: '1px solid #f90',
                              height: 32,
                              marginBottom: 8,
                            }}
                          >
                            {el}
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>

        <Droppable droppableId="board1">
          {(provided) => {
            return (
              <div
                style={{ border: '1px solid #000' }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {list.map((el, index) => {
                  return (
                    <Draggable
                      key={el.toString()}
                      draggableId={el.toString()}
                      index={index}
                    >
                      {(provided) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              border: '1px solid #f90',
                              height: 32,
                              marginBottom: 8,
                            }}
                          >
                            {el}
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

ReactBeautifulDnd.label = '拖拽';
export default ReactBeautifulDnd;
