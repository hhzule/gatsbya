import React from "react";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

const LDisplay = ({ title, content, pic, timestamp }) => {
  return (
    <div className="post-item">
      <div className="title">{title}</div>
      <div className="pic">
        <img src={pic} alt="postpic" />
      </div>
      <div className="content">
        {documentToPlainTextString(JSON.parse(content)).slice(0, 200)}
      </div>
      <br />
      <div className="datestamp">{timestamp}</div>
    </div>
  );
};
export default LDisplay;
