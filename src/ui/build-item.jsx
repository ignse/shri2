import React from 'react';
import { Link } from 'react-router-dom';
import './build-item.css';

const BuildItem = (props) => {
    const {buildNumber, commitMessage, branchName, authorName, commitHash, date, time, status} = props;

    return (
        <Link to={'#'} className={"build_item build_item_" + status.toLowerCase().replace(' ','')}>
          <div className="build_item_header">
            <b className="build_item_number">#{buildNumber}</b>
            <p className="build_item_message">{commitMessage}</p>
          </div>
          <div className="build_item_commit">
            <p className="build_item_commit_branch">{branchName} <span className="build_item_commit_hash">{commitHash}</span></p>
            <p className="build_item_author">{authorName}</p>
          </div>
          <div className="build_item_time">
            <p className="build_item_date">{date}</p>
            <p className="build_item_timestamp">{time}</p>
          </div>
        </Link>
    );
};

export default BuildItem;