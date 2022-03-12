import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './search.module.css'

export default function Search(props) {

    const [later, setLater] = useState(false)
    const [choose, setchoose] = useState(false)

    return (
        <div className={`${style.search}`}>
            <img onClick={() => props.closeNavbar(false)} src='/SVGs/cross.svg' alt='...' className={`${style.close} `}></img>
            <div className={`${style.date} grid`}>
                <span>DATE</span>
                <div className={style.separate}></div>
                <div className={style.date_option}>
                    <button className={style.date_item} onClick={() => setchoose(true)}>anytime</button>
                    <button className={style.date_item} onClick={() => setchoose(true)}>today</button>
                    <button className={style.date_item} onClick={() => setchoose(true)}>tomorrow</button>
                    <button className={style.date_item} onClick={() => setchoose(true)}>this week</button>
                    <button className={style.date_item} onClick={() => setchoose(true)}>this month</button>
                    <button onClick={() => setLater(!later)} className={style.date_item}>laters</button>
                    {
                        later
                            ? <div className={style.later_popup}>
                                Choose your date
                            </div>
                            : ''
                    }


                </div >
            </div >

            <div className={`${style.Channel} grid`}>
                <span>CHANNEL</span>
                <div className={style.separate2}></div>
                <div className={style.channel_option}>
                    <button className={style.channel_item} onClick={() => setchoose(true)}>all</button>
                    <button className={style.channel_item} onClick={() => setchoose(true)}>channel 3</button>
                    <button className={style.channel_item} onClick={() => setchoose(true)} >channel 4</button>
                    <button className={style.channel_item} onClick={() => setchoose(true)} >channel 1</button>
                    <button className={style.channel_item} onClick={() => setchoose(true)} >channel 2</button>
                    <button className={style.channel_item} onClick={() => setchoose(true)} >short</button>
                    <button className={style.channel_item} onClick={() => setchoose(true)} >short</button>
                    <button className={style.channel_item} onClick={() => setchoose(true)} >channel 3</button>
                    <button className={style.channel_item} onClick={() => setchoose(true)} >channel 4</button>
                    <button className={style.channel_item} onClick={() => setchoose(true)} >channel 5</button>
                    <button className={style.channel_item} onClick={() => setchoose(true)} >channel 6</button>

                </div>
            </div>

            <Link to='/MainLayout' onClick={() => props.closeNavbar(false, choose)} className={style.button}>
                <img className={style.searchIcon} src='/SVGs/search.svg'></img>
                <div>SEARCH</div>
            </Link>
        </div >
    )
}
