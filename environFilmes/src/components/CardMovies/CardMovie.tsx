import React from "react";
import {
  ModalContainer,
  ModalHomeContainer,
  TagContainer
} from "./CardMovieStyles";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Modal,
  ModalBody,
  ModalHeader
} from "reactstrap";
import { date } from "yup";

interface movies {
  id: number;
  tipes: string[];
  title: string;
  description: string;
  price: number;
  quantity: number;
  photo: string;
  nameauth: string;
  datemovie: Date;
  paismovie: string;
  video: string;
}

interface MoviesProps {
  movie: movies;
}

export function CardMovie({ movie }: MoviesProps) {
  const customStyles = {
    content: {
      top: "50%",
      width: "100%",
      height: "90%",
      marginTop: "2rem",
      background: "#29292E",
      left: "50%",
      right: "auto",
      opacity: "0.9",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };
  const customImg = { marginTop: "20px", width: "14rem", height: "20rem" };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(id: number) {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Card
        style={{
          width: "25rem",
          borderRadius: "1rem"
        }}
      >
        <img
          alt="Sample"
          src={`./moviesimg/${movie.photo}`}
          height={500}
          style={{
            borderRadius: "1rem  1rem 0 0"
          }}
        />
        <CardBody>
          <CardTitle tag="h5">{movie.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            <TagContainer>
              <div>
                {movie.tipes.map((tag) => (
                  <h3>
                    <img src={`./moviesimg/${tag}`} alt="" />
                  </h3>
                ))}
              </div>
            </TagContainer>
          </CardSubtitle>
          <CardText></CardText>
          <Button onClick={() => openModal(movie.id)}>
            <span>DETALHES</span>
          </Button>
        </CardBody>
      </Card>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        toggle={closeModal}
        size="xl"
        fullscreen="xl"
      >
        <ModalHeader toggle={closeModal}>{movie.title}</ModalHeader>
        <ModalBody width="100vw">
          <ModalContainer>
            <TagContainer>
              <img
                src={`./moviesimg/${movie.photo}`}
                alt=""
                style={customImg}
              />
              <div>
                {movie.tipes.map((tag) => (
                  <h3>
                    <img src={`./assets/${tag}`} alt="" />
                  </h3>
                ))}
              </div>
              <span>
                <strong>Nome Diretor: </strong>
                {movie.nameauth}
              </span>
              <span>
                <strong>País de Origem: </strong>
                {movie.paismovie}
              </span>
              <span>
                <strong>Ano de Laçamento:</strong>{" "}
                {new Date(movie.datemovie).toLocaleDateString()}
              </span>
            </TagContainer>
            <div style={{ width: "100%", overflowX: "auto", marginLeft: 50 }}>
              <p>{movie.description}</p>
              <video
                id="videoBanner"
                className="videoBanner"
                loop
                autoPlay
                width="100%"
                controls
              >
                <source
                  src={`./moviesimg/${movie.video}`}
                  type="video/mp4"
                ></source>
              </video>
            </div>
          </ModalContainer>
        </ModalBody>
      </Modal>
    </>
  );
}
