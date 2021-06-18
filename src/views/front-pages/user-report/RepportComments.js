import React from "react";
import { Modal } from "@lifeomic/chroma-react/components/Modal";
import { TextField } from "@lifeomic/chroma-react/components/TextField";
import { Divider } from "@lifeomic/chroma-react/components/Divider";
import { Paper } from "@lifeomic/chroma-react/components/Paper";
import RapportService from "../../../services/rapport-service";
import AuthService from "../../../services/auth.service";
import { useInput } from "hooks/inputHook";
import { InfiniteScroll } from "@lifeomic/chroma-react/components/InfiniteScroll";

import {} from "module";

import { Container, Row, Col } from "reactstrap";

const RapportComments = (props) => {

  const [allcomments, setAllComments] = React.useState([]);

  let idRapport = props.idrapport;

  let [isOpen, setIsOpen] = React.useState(false);

  const {
    value: comments,
    bind: bindComments,
    reset: resetComments,
  } = useInput("");

  const addRapportComment = () => {
   const user = AuthService.getCurrentUser();
   const newComment = {
      "content" : comments,
      "rapport" : "/api/rapports/"+idRapport
    }

    RapportService.addComments(newComment).then(response=>{
      loadRapportComments();       
    });

  };

  const loadRapportComments = () => {
    const user = AuthService.getCurrentUser();
    RapportService.getComments(idRapport).then((response) => {
      let allcom = [];
      response.data["hydra:member"].map((value) => {
        allcom.push({
          id: value.id,
          content: value.content,
          user: value.user,
          datetime: value.createdAt
        });
      });
      setAllComments(allcom);
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    addRapportComment()
  };

  React.useEffect(() => {
    loadRapportComments();
    setIsOpen(props.isopen);
  }, [props.isopen]);

  return (
    <>
      <Modal
        fullWidth
        size={1}
        poses={{
          init: { y: 50, scale: 0.3 },
          open: { y: 50, scale: 1 },
          exit: { scale: 0.5, transition: { duration: 0.15 } },
        }}
        title="Commentaires"
        isOpen={isOpen}
        onDismiss={() => {
          console.log("user clicked close button or pressed ESC");
          setIsOpen(false);
          props.isOpenHundle(false);
        }}
      >
        <Container>
          <Row>
            <Col md="12">
              <form onSubmit={onFormSubmit}>
                <TextField
                  placeholder="Editez un commentaire ..."
                  fullWidth
                  {...bindComments}
                  label=" "
                  className="m-3"
                />
              </form>
              <InfiniteScroll
                className="optional-className"
                scrollOffset={500}
                scrollContainer="parent"
              >
                {allcomments.map((com) => {
                  return (
                    <Paper padding={1} margin={1}>
                      <p style={{ fontSize: "12px", color: "gray" }}>
                        @{com.user}
                      </p>
                      <span style={{ fontSize: "14px", color: "black" }}>
                      {com.content}
                      </span>
                      <p style={{ fontSize: "12px", color: "gray" }}>
                      {com.datetime}
                      </p>
                    </Paper>
                  );
                })}
              </InfiniteScroll>
            </Col>
          </Row>
        </Container>
      </Modal>
    </>
  );
};

export default RapportComments;
