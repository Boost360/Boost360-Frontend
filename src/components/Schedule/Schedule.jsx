import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler, Appointments, MonthView, Toolbar,
  DateNavigator, TodayButton, Resources, AppointmentTooltip, AppointmentForm
} from '@devexpress/dx-react-scheduler-material-ui';
import './Schedule.css';
import { withStyles, createStyles } from '@mui/styles';
import classNames from 'clsx';
import Grid from '@mui/material/Grid';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

/**
 * Schedule Conponents for Class Time table.
 * @author Zach Wang
 * @date 2021/10/10 
 */




const styles = ({ palette }) => createStyles({
  appointment: {
    borderRadius: 0,
    borderBottom: 0,
  },
  content: {
    opacity: 0.7,
  },
  textCenter: {
    textAlign: 'center',
  },
});

const resources = [{
  fieldName: 'type',
  title: 'Type',
  instances: [
    { id: '1', text: 'Type 1', color: '#6FCF97' },
    { id: '2', text: 'Type 2', color: '#27AE60' },
    { id: '3', text: 'Type 3', color: '#219653' },
  ],
}];


const Appointment = withStyles(styles)(({
  classes, data, ...restProps
}) => (
  <Appointments.Appointment
    {...restProps}
    data={data}
  />
));

const AppointmentContent = withStyles(styles, { name: 'AppointmentContent' })(({
  classes, data, ...restProps
}) => {
  return (
    <Appointments.AppointmentContent {...restProps} data={data}>
      <div className={classes.container}>
        <div className={classes.text}>
          {data.title}
        </div>
        <div className={classNames(classes.text, classes.content)}>
          {data.location}
        </div>
        <div className={classNames(classes.text, classes.content)}>
          {`Type: ${data.type}`}
        </div>
      </div>
    </Appointments.AppointmentContent>
  );
});


const Content = withStyles(styles, { name: 'Content' })(({
  children, appointmentData, classes, ...restProps
}) => (
  <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
    <Grid container alignItems="center">
      <Grid item xs={2} className={classes.textCenter}>
        <RoomOutlinedIcon className={classes.icon} />
      </Grid>
      <Grid item xs={10}>
        <span>{appointmentData.location}</span>
      </Grid>
    </Grid>
  </AppointmentTooltip.Content>
));



const Schedule = () => {

  const data = [
    {
      title: "Golf Class 1",
      startDate: new Date(2021, 9, 23, 9, 30),
      endDate: new Date(2021, 9, 23, 11, 30),
      location: "Bucklands Beach Golf Club",
      type: '1'
    },
    {
      title: "Golf Class 2",
      startDate: new Date(2021, 9, 12, 9, 30),
      endDate: new Date(2021, 9, 12, 11, 30),
      location: "Bucklands Beach Golf Club",
      type: '2'
    },
    {
      title: "Golf Class 3",
      startDate: new Date(2021, 9, 15, 9, 30),
      endDate: new Date(2021, 9, 15, 11, 30),
      location: "Bucklands Beach Golf Club",
      type: '3'
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
            <Appointments
              appointmentComponent={Appointment}
              appointmentContentComponent={AppointmentContent}
            />
            <AppointmentTooltip
              contentComponent={Content}
              showCloseButton
            />
            <Resources
              data={resources}
            />
           
          </Scheduler>
        </Paper>
      </div>
    </div>
  );
}


export default Schedule;