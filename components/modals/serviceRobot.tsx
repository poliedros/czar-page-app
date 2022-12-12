import { Col, Row, Table } from "react-bootstrap";
import { Languages } from "../../types/languages";
import translations from "../../functions/translations";

export default function ModalRobot({ language }: { language: Languages }) {
  return (
    <>
      <Row>
        <Col>
          <h4>{translations("servicemodalt", language, 2)}</h4>
          <h6>{translations("servicemodalmsg", language, 2)}</h6>
        </Col>
        <Col>
          <h4>{translations("newsrobot", language)}</h4>
          <div
            className="h-2/4 overflow-y-auto"
            style={{ height: "50vh", overflowY: "auto" }}
          >
            <Table striped bordered hover responsive="sm" variant="dark">
              <thead>
                <tr>
                  <th>
                    Number <br /> Agency <br /> Data and Hour{" "}
                  </th>
                  <th>News</th>
                  {/*<th>Agency</th>
                    <th>Date & Hour</th>*/}
                </tr>
              </thead>
              <tbody>
                {/* {this.state.message ? this.state.message.map((ms, i) => { */}
                return (
                <>
                  <tr>
                    <td>
                      <span
                        className="text-lightgreen text-2xl" /* style={{ color: "lightgreen", fontSize: "1.5rem" }} */
                      >
                        {/* i */ +1}
                      </span>
                      <br />
                      {/* ms.by */}
                      <br />
                      {/* ms.publishedAt.split('T')[0] + '\n' + ms.publishedAt.split('T')[1].split('.')[0] */}
                    </td>
                    <td>{/* ms.headline */}</td>
                  </tr>
                  {/*<tr>
                          <td>{ i+1 }</td>
                          <td>{ ms.by }</td>
                          <td>{ ms.publishedAt.split('T')[0]  + '\n' + ms.publishedAt.split('T')[1].split('.')[0] }</td>
                        </tr>
                        <tr>
                          <td colSpan={3}>{ ms.headline }</td>
                        </tr>*/}
                </>
                ){/* }) : null} */}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </>
  );
}
