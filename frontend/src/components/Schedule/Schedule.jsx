import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  AppointmentTooltip,
  AppointmentForm
} from '@devexpress/dx-react-scheduler-material-ui';
import { indigo, blue, teal } from '@mui/material/colors'
import './Schedule.css';
import { withStyles,createStyles } from '@mui/styles';
import classNames from 'clsx';
import { Fade } from '@mui/material';





const Schedule = () => {

  const data = [
    {
      title: "Website Re-Design Plan",
      startDate: new Date(2021, 9, 23, 9, 30),
      endDate: new Date(2021, 9, 23, 11, 30),
      priority: 3
    }
  ]



  return (

    <div className="schedulePage">
      <div className="schedule">
        <Paper>
          <Scheduler
            data={data}
          >
            <ViewState
              defaultCurrentDate="2021-10-26"
            />
            <MonthView />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <Appointments/>
            <AppointmentTooltip
              showCloseButton
              showOpenButton
            />
            <AppointmentForm
              readOnly
            />
          </Scheduler>
        </Paper>
      </div>
    </div>
  );
}


export default Schedule;