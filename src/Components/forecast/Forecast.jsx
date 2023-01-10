import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import './Forecast.css'; 


const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; 

const Forecast = ({data}) => { 

    const dayInaWeek    = new Date().getDay();
    const forecastDays  = WEEK_DAYS.slice(dayInaWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInaWeek)); 

    console.log(forecastDays);

  return (
    <>
        <label className='title'>Daily</label>
        <Accordion allowZeroExpanded>
            {
                data.list.slice(0, 7).map((item, idx)=>(
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img src={`icons/${item.weather[0].icon}.png`} className='icon-small' alt="weather" />
                                    <label className='day'>{forecastDays[idx]}</label>
                                    <label className='description'>{item.weather[0].description}</label>
                                    <label className='min-max'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_min)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className='daily-details-grid-item'>
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all}</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Wind Speed:</label>
                                    <label>{item.main.humidity} m/s</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Sea Level:</label>
                                    <label>{item.main.sea_level} m/s</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))
            }
        </Accordion>
    </>
  )
}

export default Forecast