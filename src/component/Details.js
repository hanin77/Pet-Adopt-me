import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import { connect } from "react-redux";
import Modal from "./Modal";
class Details extends React.Component {
  constructor() {
    super();
    this.state = { loading: true, showModal: false };
  }

  componentDidMount() {
    pet
      .animal(+this.props.match.params.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
          url: animal.url,
        });
      })
      .catch((err) => this.setState({ error: err }));
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => {
    this.setState({ showModal: !this.state.showModal });
    window.open(this.state.url, "_blank");
  };
  render() {
    if (this.state.loading) {
      return <h1>loading … </h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
    } = this.state;

    return (
      <div className="details">
        <div>
          <Carousel media={media} />
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>

          <button
            style={{ backgroundColor: this.props.theme }}
            onClick={this.toggleModal}
          >
            Adopt {name}
          </button>

          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(Details);
