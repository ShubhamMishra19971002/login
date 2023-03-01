import React, { useEffect, useState } from "react";
import variables from '../styles/variables.module.scss';

const ReadMore = (props) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const [lineItems, setLineItems] = useState([]);
  const [showReadMore, setShowReadMore] = useState(false);

  useEffect(() => {
    if (props.data)
      setLineItems(props.data);

    if (props.data?.length > 1 || props.data?.[0]?.length > 60)
      setShowReadMore(true);
  }, [props.data]);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const fetchShortText = () => {

    let firstItem = lineItems?.[0];
    if (firstItem?.length > 0) {
      let text = lineItems?.[0]?.slice(0, 60);
      if (firstItem?.length > 60) {
        let pos = text?.lastIndexOf(' ');
        return (<ul><li className="has-dot active" style={{ color: variables.gray600 }}> <small>{text?.slice(0, pos)}</small> </li></ul>)
      }
      else
        return (<ul><li className="has-dot active" style={{ color: variables.gray600 }}> <small>{text}</small> </li></ul>)
    }
  }

  const fetchEntireText = () => {
    let text = lineItems.map(reason => {
      return (<li className="has-dot active" style={{ color: variables.gray600 }}> <small>{reason}</small> </li>);
    })
    return (<ul>{text}</ul>);
  }

  return (
    <div className="d-flex items-center">
      {isReadMore ? fetchShortText() : fetchEntireText()}
      {showReadMore && <p style={{fontSize: variables.size_sm, color: variables.secondary}} onClick={toggleReadMore}
       className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </p>}

    </div>
  );
};

export default ReadMore;