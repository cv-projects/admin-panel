import React from 'react';
import {
    faBars,
    faCodeCompare,
    faEnvelope,
    faHeart,
    faLock,
    faMagnifyingGlass,
    faMinus, faPenToSquare,
    faPlus, faTrash
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './icons.scss';
import {faInstagram, faLinkedinIn, faTelegram, faTwitter} from "@fortawesome/free-brands-svg-icons";

const EmailIcon = () => {
    return (
        <>
            <span className="icon emailIcon">
                <FontAwesomeIcon icon={faEnvelope}/>
            </span>
        </>
    );
};

const BasketIcon = () => {
    return (
        <>
            <span className="icon basketIcon">
                <FontAwesomeIcon icon={faLock}/>
            </span>
        </>
    );
};

const HeartIcon = () => {
    return (
        <>
            <span className="icon basketIcon">
                <FontAwesomeIcon icon={faHeart}/>
            </span>
        </>
    );
};

const ListIcon = () => {
    return (
        <>
            <span className="icon listIcon">
               <FontAwesomeIcon icon={faBars}/>
            </span>
        </>
    );
};

const SearchIcon = () => {
    return (
        <>
            <span className="icon searchIcon">
               <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </span>
        </>
    );
};

const PlusIcon = () => {
    return (
        <>
            <span className="icon searchIcon">
               <FontAwesomeIcon icon={faPlus}/>
            </span>
        </>
    );
};

const MinusIcon = () => {
    return (
        <>
            <span className="icon searchIcon">
               <FontAwesomeIcon icon={faMinus}/>
            </span>
        </>
    );
};

const CompareIcon = () => {
    return (
        <>
            <span className="icon searchIcon">
               <FontAwesomeIcon icon={faCodeCompare}/>
            </span>
        </>
    );
};

const TelegramIcon = () => {
    return (
        <>
            <span className="icon telegramIcon">
               <FontAwesomeIcon icon={faTelegram}/>
            </span>
        </>
    );
};

const InstagramIcon = () => {
    return (
        <>
            <span className="icon instagramIcon">
                <FontAwesomeIcon icon={faInstagram}/>
            </span>
        </>
    );
};

const TwitterIcon = () => {
    return (
        <>
            <span className="icon twitterIcon">
                <FontAwesomeIcon icon={faTwitter}/>
            </span>
        </>
    );
};
const LinkedinInIcon = () => {
    return (
        <>
            <span className="icon linkedinInIcon">
                <FontAwesomeIcon icon={faLinkedinIn}/>
            </span>
        </>
    );
};

const PenIcon = () => {
    return (
        <>
            <span className="icon penIcon">
                <FontAwesomeIcon icon={faPenToSquare} />
            </span>
        </>
    );
};

const TrashIcon = () => {
    return (
        <>
            <span className="icon trashIcon">
                <FontAwesomeIcon icon={faTrash} />
            </span>
        </>
    );
};

export {
    ListIcon,
    EmailIcon,
    BasketIcon,
    HeartIcon,
    SearchIcon,
    PlusIcon,
    MinusIcon,
    CompareIcon,
    TelegramIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinInIcon,
    PenIcon,
    TrashIcon
};