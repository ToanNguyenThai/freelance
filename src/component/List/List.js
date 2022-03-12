import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import style from './list.module.css'

export default function List(props) {
    console.log(props.result);
    if (props.result === false) {
        return (
            <div id="list" className={style.list}>
                <div className={style.list_container}>

                    <div className={style.navbar__container}>
                        <div className={`${style.navbar} grid`}>
                            <img onClick={() => props.openNavbar(true)} className={style.searchIcon} src='/SVGs/search.svg'></img>
                            <img className={style.mainIcon} src='/SVGs/logo-cat.svg' alt="" />

                            <Link to='/'>
                                <img className={style.mainIcon} src='/SVGs/user.svg' alt="" />
                            </Link>


                        </div>
                    </div>

                    <div className={`${style.Result} `} >
                        <div className={`${style.row1} grid`}>
                            <h3>0 Results</h3>
                            <div onClick={() => props.openNavbar(true)} className={style.clear}>CLEAR SEARCH</div>
                        </div>
                        <div className={`${style.row2} grid`}>

                            Searched for Channel 3 Activities from 20/06 to 24/06
                        </div>
                    </div>
                    <div className={`${style.Result_img} `} >
                        <img src='/SVGs/no-activity.svg'></img>
                        <h3>No activity found</h3>
                    </div>
                </div>
            </div >
        )
    }
    else {
        if (props.result === '') {
            return (

                <div id="list" className={style.list}>
                    <div className={style.list_container}>

                        <div className={style.navbar__container}>
                            <div className={`${style.navbar} grid`}>
                                <img onClick={() => props.openNavbar(true)} className={style.searchIcon} src='/SVGs/search.svg'></img>
                                <img className={style.mainIcon} src='/SVGs/logo-cat.svg' alt="" />
                                <Link to='/'>
                                    <img className={style.mainIcon} src='/SVGs/user.svg' alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className={`${style.content1} grid`}>
                            <div className={style.content1__header}>
                                <div className={style.user}>
                                    <img className={style.user_img} src='/SVGs/info.svg'></img>
                                    <div className={style.user_name}>Username</div>
                                </div>
                                <div className={style.channelBG}>
                                    Channel Name
                                </div>
                            </div>
                            <div className={style.content1_body}>
                                <h3 className={style.content_title}>Activity Title Name Make it Longer May Longer than One Line</h3>
                                <div className={style.content_time}>
                                    <img className={style.time} src='/SVGs/time.svg'></img>
                                    <div>14 May 2016 12:22 - 14 May 2016 18:00</div>
                                </div>
                                <p>
                                    [No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien mi potenti...
                                </p>
                                <div className={style.activity}>
                                    <div className={style.like}>
                                        <img className={style.like_img} src='/SVGs/check.svg'></img>
                                        <div className={style.like_text}>I am going!</div>
                                    </div>
                                    <div className={style.heart}>
                                        <img className={style.heart_img} src='/SVGs/like.svg'></img>
                                        <div className={style.heart_text}>I like it!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.content2} grid`}>
                            <div className={style.content1__header}>
                                <div className={style.user}>
                                    <img className={style.user_img} src='/SVGs/info.svg'></img>
                                    <div className={style.user_name}>Username</div>
                                </div>
                                <div className={style.channelBG}>
                                    Channel name longer
                                </div>
                            </div>
                            <div className={style.content2_body}>
                                <div className={style.content_body_left}>
                                    <h3 className={style.content_title}>Activity Title Name Make it Longer May Longer than One Line</h3>
                                    <div className={style.content_time}>
                                        <img className={style.time} src='/SVGs/time.svg'></img>
                                        <div>14 May 2016 12:22 - 14 May 2016 18:00</div>
                                    </div>
                                    <p>
                                        [No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien mi potenti...
                                    </p>
                                    <div className={style.activity}>
                                        <div className={style.like}>
                                            <img className={style.like_img_content2} src='/SVGs/check-outline.svg'></img>
                                            <div className={style.like_text}>I am going!</div>
                                        </div>
                                        <div className={style.heart}>
                                            <img className={style.heart_img_content2} src='/SVGs/like-outline.svg'></img>
                                            <div className={style.heart_text}>I like it!</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.content_body_right}>
                                    <img className={style.img_right} src="" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            )
        }
        else {
            return (

                <div id="list" className={style.list}>
                    <div className={style.list_container}>

                        <div className={style.navbar__container}>
                            <div className={`${style.navbar} grid`}>
                                <img onClick={() => props.openNavbar(true)} className={style.searchIcon} src='/SVGs/search.svg'></img>
                                <img className={style.mainIcon} src='/SVGs/logo-cat.svg' alt="" />
                                <Link to='/'>
                                    <img className={style.mainIcon} src='/SVGs/user.svg' alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className={`${style.Result} `} >
                            <div className={`${style.row1} grid`}>
                                <h3>14 Results</h3>
                                <div onClick={() => props.openNavbar(true)} className={style.clear}>CLEAR SEARCH</div>
                            </div>
                            <div className={`${style.row2} grid`}>

                                Searched for Channel 3 Activities from 20/06 to 24/06
                            </div>
                        </div>
                        <div className={`${style.content1} grid`}>
                            <div className={style.content1__header}>
                                <div className={style.user}>
                                    <img className={style.user_img} src='/SVGs/info.svg'></img>
                                    <div className={style.user_name}>Username</div>
                                </div>
                                <div className={style.channelBG}>
                                    Channel Name
                                </div>
                            </div>
                            <div className={style.content1_body}>
                                <h3 className={style.content_title}>Activity Title Name Make it Longer May Longer than One Line</h3>
                                <div className={style.content_time}>
                                    <img className={style.time} src='/SVGs/time.svg'></img>
                                    <div>14 May 2016 12:22 - 14 May 2016 18:00</div>
                                </div>
                                <p>
                                    [No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien mi potenti...
                                </p>
                                <div className={style.activity}>
                                    <div className={style.like}>
                                        <img className={style.like_img} src='/SVGs/check.svg'></img>
                                        <div className={style.like_text}>I am going!</div>
                                    </div>
                                    <div className={style.heart}>
                                        <img className={style.heart_img} src='/SVGs/like.svg'></img>
                                        <div className={style.heart_text}>I like it!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.content2} grid`}>
                            <div className={style.content1__header}>
                                <div className={style.user}>
                                    <img className={style.user_img} src='/SVGs/info.svg'></img>
                                    <div className={style.user_name}>Username</div>
                                </div>
                                <div className={style.channelBG}>
                                    Channel name longer
                                </div>
                            </div>
                            <div className={style.content2_body}>
                                <div className={style.content_body_left}>
                                    <h3 className={style.content_title}>Activity Title Name Make it Longer May Longer than One Line</h3>
                                    <div className={style.content_time}>
                                        <img className={style.time} src='/SVGs/time.svg'></img>
                                        <div>14 May 2016 12:22 - 14 May 2016 18:00</div>
                                    </div>
                                    <p>
                                        [No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien mi potenti...
                                    </p>
                                    <div className={style.activity}>
                                        <div className={style.like}>
                                            <img className={style.like_img_content2} src='/SVGs/check-outline.svg'></img>
                                            <div className={style.like_text}>I am going!</div>
                                        </div>
                                        <div className={style.heart}>
                                            <img className={style.heart_img_content2} src='/SVGs/like-outline.svg'></img>
                                            <div className={style.heart_text}>I like it!</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.content_body_right}>
                                    <img className={style.img_right} src="" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            )

        }
    }




}
