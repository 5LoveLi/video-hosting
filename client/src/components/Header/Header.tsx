import { SearchForm } from "../Search/Search"
import { Col, Row } from 'antd';

import './Header.css'

export const Header: React.FC = () => {
  return (
    <>
      <Row className="indent">
        <Col span={12} offset={7}>
          <SearchForm/>
        </Col>
      </Row>
    </>
  )
}