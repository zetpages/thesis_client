// import React, {Component, useContext} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
// import { Button} from 'react-bootstrap';
// import Board from 'react-trello';
// import {Context} from "../../index";
// import AdminBoard from "../../User/AdminBoard";
// const data = require('../../data/todo.json');
//
//
// const handleDragStart = (cardId, laneId) => {
//   console.log('drag started')
//   console.log(`cardId: ${cardId}`)
//   console.log(`laneId: ${laneId}`)
// }
//
// const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
//   console.log('drag ended')
//   console.log(`cardId: ${cardId}`)
//   console.log(`sourceLaneId: ${sourceLaneId}`)
//   console.log(`targetLaneId: ${targetLaneId}`)
// }
//
// export default class DashboardOverview extends React.Component {
//   state = { boardData: { lanes: [] } }
//
//   // static contextType = Context;
//   setEventBus = (eventBus) => {
//     this.setState({ eventBus })
//   }
//
//   async componentDidMount() {
//     const response = await this.getBoard()
//     this.setState({ boardData: response })
//   }
//
//   getBoard() {
//     return new Promise((resolve) => {
//       resolve(data)
//     })
//   }
//
//   // completeCard = () => {
//   //   this.state.eventBus.publish({
//   //     type: 'ADD_CARD',
//   //     laneId: 'COMPLETED',
//   //     card: {
//   //       id: 'Milk',
//   //       title: 'Buy Milk',
//   //       label: '15 mins',
//   //       description: 'Use Headspace app',
//   //     },
//   //   })
//   //   this.state.eventBus.publish({
//   //     type: 'REMOVE_CARD',
//   //     laneId: 'PLANNED',
//   //     cardId: 'Milk',
//   //   })
//   // }
//   //
//   // addCard = () => {
//   //   this.state.eventBus.publish({
//   //     type: 'ADD_CARD',
//   //     laneId: 'BLOCKED',
//   //     card: {
//   //       id: 'Ec2Error',
//   //       title: 'EC2 Instance Down',
//   //       label: '30 mins',
//   //       description: 'Main EC2 instance down',
//   //     },
//   //   })
//   // }
//
//   shouldReceiveNewData = (nextData) => {
//     console.log('New card has been added')
//     console.log(nextData)
//   }
//
//   handleCardAdd = (card, laneId) => {
//     console.log(`New card added to lane ${laneId}`)
//     console.dir(card)
//   }
//   render() {
//
//     // const {board} = this.context;
//     // console.log(board)
//     return (
//         <>
//           <div className="App">
//             <div className="App-header">
//               <h3>React Trello</h3>
//             </div>
//             <div className="App-intro">
//               {/*<Button onClick={this.completeCard} style={{ margin: 5 }}>*/}
//               {/*  Complete Buy Milk*/}
//               {/*</Button>*/}
//               {/*<Button onClick={this.addCard} style={{ margin: 5 }}>*/}
//               {/*  Add Blocked*/}
//               {/*</Button>*/}
//               <Board
//                   lang="ru"
//                   editable
//                   onCardAdd={this.handleCardAdd}
//                   data={this.state.boardData}
//                   draggable
//                   onDataChange={this.shouldReceiveNewData}
//                   eventBusHandle={this.setEventBus}
//                   handleDragStart={handleDragStart}
//                   handleDragEnd={handleDragEnd}
//                   // components={components}
//               />
//             </div>
//           </div>
//         </>
//     );
//   }
// };
//
// // function Card(props) {
// //   const {yourProps} = props;
// //   return (<div>{yourProps}</div>)
// // }
//
// // const components = {
// //   Card: (props) => Card({ ...props, yourProps: 'hello world' }),
// // };


import React from "react";
import isEmpty from "lodash/isEmpty";
import axios from "axios";
import Board from "react-trello";
import InnerTopBar from "./components/InnerTopBar";

export default class Tasks extends React.Component {
  state = {
    data: {}
  };

  componentDidMount() {
    this.getTodos();
    this.postTodos();
  }

  postTodos = () => {
      axios
          .post("http://localhost:5000/api/task-category/")
          .then(res => {

          })
  }

  getTodos = () => {
    axios
        .get("http://localhost:5000/api/task-category/")
        .then(res => {
          const data = {
            lanes: res.data.map(taskCategory => ({
              id: taskCategory.name,
              title: taskCategory.name,
              style: {width: 280},
                cards: taskCategory?.tasks.map(task => ({
                    id: task.id.toString(),
                    title: task.title,
                    label: task.label,
                    cardStyle: { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
                    description: task.description
                }))
            }))
          };
          console.log(data)
          this.setState({ data });
        })
        .catch(error => {
          console.error(error);
        });
  };

  render() {
    const { data } = this.state;
    return (
        <>
            <InnerTopBar/>
            <div className="react__trello">
                {!isEmpty(data) ? <Board data={data} draggable lang="ru" editable /> : <p>Loading...</p>}
            </div>
        </>
    );
  }
}
