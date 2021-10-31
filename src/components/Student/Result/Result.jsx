import * as React from 'react';
import './Result.css';
import './ResultInner/ResultInner';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ResultInner from "./ResultInner/ResultInner";


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


const Result = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className='result_container' sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
                    <ResultInner resultType={'notice'}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ResultInner resultType={'swingData'}/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ResultInner resultType={'equipments'}/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <ResultInner resultType={'yardages'}/>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <ResultInner resultType={'progressReports'}/>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <ResultInner resultType={'physicalDevelopment'}/>
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <ResultInner resultType={'psychologyDevelopment'}/>
                </TabPanel>
            </div>

        </Box>
    );
};
export default Result;