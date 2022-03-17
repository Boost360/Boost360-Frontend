import * as React from 'react';
import './Result.css';
import './ResultInner/ResultInner';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ResultInner from "./ResultInner/ResultInner";
import {resultStudent} from '../../../api/result/result';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const Result = ({user}) => {
    const user_id = user._id;
    const [value, setValue] = React.useState(0);
    const [loading, setLoading] = React.useState(true);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //Data sets for different type of data
    const [notice, setNotice] = React.useState([]);
    const [swingData, setSwingData] = React.useState([]);
    const [equipments, setEquipments] = React.useState([]);
    const [yardages, setYardages] = React.useState([]);
    const [physicalDevelopment, setPhysicalDevelopment] = React.useState([]);
    const [progressReports, setProgressReport] = React.useState([]);
    const [psychologyDevelopment, setPsychologyDevelopment] = React.useState([]);

    React.useEffect(async () => {
        let resultData = await resultStudent(user_id);
        let notice = []
        let swingData = []
        let equipments = []
        let yardages = []
        let physicalDevelopment = []
        let progressReport = []
        let psychologyDevelopment = []
        for (let i=0; i < resultData.data.length; i++){
            switch (resultData.data[i].type){
                case 'notice':
                    notice.push(resultData.data[i])
                    break
                case 'swingData':
                    swingData.push(resultData.data[i])
                    break
                case 'equipments':
                    equipments.push(resultData.data[i])
                    break
                case 'yardages':
                    yardages.push(resultData.data[i])
                    break
                case 'physicalDevelopment':
                    physicalDevelopment.push(resultData.data[i])
                    break
                case 'progressReports':
                    progressReport.push(resultData.data[i])
                    break
                case 'psychologyDevelopment':
                    psychologyDevelopment.push(resultData.data[i])
                    break
            }
        }
        setNotice(notice)
        setSwingData(swingData)
        setEquipments(equipments)
        setYardages(yardages)
        setPhysicalDevelopment(physicalDevelopment)
        setProgressReport(progressReport)
        setPsychologyDevelopment(psychologyDevelopment)
        setLoading(false);
    }, []);

    return (
        <Box className='result_container' sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Notice" {...a11yProps(0)} />
                    <Tab label="Swing Data" {...a11yProps(1)} />
                    <Tab label="Equipments" {...a11yProps(2)} />
                    <Tab label="Yardages" {...a11yProps(3)} />
                    <Tab label="Progress Reports" {...a11yProps(4)} />
                    <Tab label="Physical Development" {...a11yProps(5)} />
                    <Tab label="Psychology Development" {...a11yProps(6)} />
                </Tabs>
            </Box>
            <div className='result_inner_container'>
                <TabPanel value={value} index={0}>
                    <ResultInner data={notice} loading={loading}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ResultInner data={swingData} loading={loading}/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ResultInner data={equipments} loading={loading}/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <ResultInner data={yardages} loading={loading}/>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <ResultInner data={progressReports} loading={loading}/>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <ResultInner data={physicalDevelopment} loading={loading}/>
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <ResultInner data={psychologyDevelopment} loading={loading}/>
                </TabPanel>
            </div>

        </Box>
    );
};
export default Result;