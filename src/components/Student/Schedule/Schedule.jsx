import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Skeleton } from '@mui/material';
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
import { schedule } from '../../../api/schedule/schedule';
import { classType } from '../../../api/schedule/classType';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';

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
          {data.type[0].name}
        </div>
        <div className={classNames(classes.text, classes.content)}>
          {data.location}
        </div>
       
      </div>
    </Appointments.AppointmentContent>
  );
});


const Content = withStyles(styles, { name: 'Content' })(({
  children, appointmentData, classes, ...restProps
}) => (
  <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>

{appointmentData.lessonNumber?<Grid container alignItems="center">
     
     <Grid item xs={2} className={classes.textCenter}>
       <TagOutlinedIcon className={classes.icon} />
     </Grid>
  
     <Grid item xs={10}>
       <span>{appointmentData.lessonNumber}</span>
     </Grid>
   </Grid>:<></>}

    {appointmentData.location?<Grid container alignItems="center">
     
      <Grid item xs={2} className={classes.textCenter}>
        <RoomOutlinedIcon className={classes.icon} />
      </Grid>
   
      <Grid item xs={10}>
        <span>{appointmentData.location}</span>
      </Grid>
    </Grid>:<></>}

    {appointmentData.notes?<Grid container alignItems="center">
     
     <Grid item xs={2} className={classes.textCenter}>
       <NotesOutlinedIcon className={classes.icon} />
     </Grid>
  
     <Grid item xs={10}>
       <span>{appointmentData.notes}</span>
     </Grid>
   </Grid>:<></>}


   
  </AppointmentTooltip.Content>
));



const Schedule = ({user}) => {
  const [data,setData] = React.useState([])

  const [loading,setLoading] = React.useState(true)
  
  const [reso,setReso] = React.useState([])
  

  React.useEffect(async () => {
    const resources = [{
      fieldName: 'type_id',
      title: 'Type',
      instances:[],
    }];
    let classTypeRes = await classType();

    let res = await schedule(user._id);
   
    if (res.status === 200 && classTypeRes.status===200) {
      classTypeRes.data.map((type)=>{
        type.id = type._id
        type.text = type.name
     
      })
      resources[0].instances=classTypeRes.data
      setReso(resources)  
      setData(res.data)
    
      
      
    } else {
        
    }
    setLoading(false);
}, []);

  


  return (

    <div className="schedulePage">
       <div className="schedule">
      {loading?  <Skeleton variant="rectangular" height={800} />:
      
       <Paper>
         <Scheduler
           data={data}
         >
           <ViewState
            
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
             data={reso}
           />
          
         </Scheduler>
       </Paper>
  
      
      
      }
       </div>
      
       </div>
     
  );
}


export default Schedule;