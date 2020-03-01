import React from "react";
import { Row, Col } from "react-grid-system";
import { Infos, DroppedBy, AvailableIn } from "../DetailedViewComponents";

const Pet = ({tablename, data}) => {
  const {
    obj, dropped_by, random_boxes
  } = data;

  const itemInfos = [
    { label: "Tradable", value: `${obj.tradable ? "True" : "False"}` },
  ]

  return (
    <Row>
      <Col md={4}>
        <Infos tablename={tablename} data={obj} itemInfos={itemInfos} />
      </Col>

      <Col md={8}>
        <AvailableIn boxes={random_boxes} />
        <DroppedBy droppedBy={dropped_by} />
      </Col>
    </Row>
  )
}

export default Pet;