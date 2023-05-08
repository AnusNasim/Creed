import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import moment from "moment";

export default function StatusStep({ status }) {
  console.log('status => ', status)
  return <>
    {status.isActive && <>
      {/* <TimelineItem>
        < className="first-stepper bg-red"  >
          <TimelineConnector className="bg-red" />
        </TimelineSeparator >
        <TimelineContent>
        </TimelineContent>
      </TimelineItem> */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {status.icon}
          {/* <img src={status.icon} alt="" className="track-calender" /> */}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className="timeline-dot bg-red" />
          <TimelineConnector className="pre-double-circle-conn bg-red" />
        </TimelineSeparator>
        <TimelineContent className="mid-bold text-red">{status.name}
          <p className=" order-desc mid-bold small light-bold" >{status.description}</p>
          <p className=" order-time dull-grey small light-bold">{status.date}</p>
          <p className="dull-grey small">
            <a href='/' className=" see-update text-red"><i>See update</i></a>
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className='see-update-icon-li'>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
        </TimelineOppositeContent>
        <TimelineSeparator>
          <span className="double-circle" color='red'></span>
          <TimelineConnector className="double-circle-connector" />
        </TimelineSeparator>
        <TimelineContent className="mid-bold text-red">
        </TimelineContent>
      </TimelineItem>
      </>}
    {!status.isActive && <>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <img src={status.icon} alt="" className='order-confirm-img' />
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className="timeline-dot bg-red" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="mid-bold">{status.name}
        </TimelineContent>
      </TimelineItem>
    </>}
  </>
}