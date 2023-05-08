import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { getOrderDetailsById } from '../CreateOrder/service';
import { useParams } from 'react-router-dom'
import ActiveStep from './StatusStep';
import { Steps } from 'antd';
import moment from "moment";
import { useState } from 'react';
const { Step } = Steps;
export default function TrackStepper({ order }) {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentStatus, setCurrentStatus] = useState<number>(0);
  const [statuses, setStatuses] = useState<any[]>([]);
  const orderStatuses: any = [
    {
      title: "Order Placed",
      subTitle: 'We have recieved your order',
      description: '',
      icon: <img src={require('../../assets/img/date-calendarIcon.png')} alt="" />
    },
    {
      title: "Order Confirmed",
      subTitle: 'We have confirmed your order',
      description: "",
      icon: <img src={require('../../assets/img/file-tick-svgrepo-com.png')} alt="" />
    },
    {
      title: "Processing and Quality Check",
      subTitle: 'We are checking quality',
      description: "",
      icon: <img src={require('../../assets/img/award-badge-quality-svgrepo-com.png')} alt="" />
    },
    {
      title: "Order Delivered",
      subTitle: 'We are ready',
      description: "",
      icon: <img src={require('../../assets/img/box-svgrepo-com.png')} alt="" />
    },
    {
      title: "Order Processing",
      subTitle: 'Your order is currently being processed.',
      description: "",
      icon: <img src={require('../../assets/img/box-svgrepo-com.png')} alt="" />
    },
    {
      title: "Order Cancellation Under Review",
      subTitle: 'Order cancellation is under review.',
      description: "",
      icon: <img src={require('../../assets/img/box-svgrepo-com.png')} alt="" />
    }
  ]
  React.useEffect(() => {
    const db_statuses = order.orderHistory.map(x => {
      const st = orderStatuses.find(z => z.title.toLowerCase().trim() == x.orderStatus.toLowerCase().trim());

      if (st) {
        if (st.title.toLowerCase().trim() == "Order Cancellation Under Review".toLowerCase().trim()) {
          st.subTitle = order.cancellationReason;
        }
        st.description = moment(x.createdAt).format("DD MMMM YYYY hh:mm A");
      }
      return st;
    })
    setStatuses(db_statuses)
    setLoading(false)

  }, [])
  return (
    <>
      {!loading && <Steps current={statuses.length} items={statuses} direction="vertical" style={{ height: '500px', marginTop: '7%' }} />}
    </>
    // <div className="track-timeline">
    //   <Timeline >
    //     {statuses.map((status)=>{
    //      return <ActiveStep status={{...status,isActive:true}} key={status.title.trim().replaceAll(' ','')} />
    //     })}
    //   </Timeline>
    // </div>
  );
}
