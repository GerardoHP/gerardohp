import React from 'react';

class Contact extends React.PureComponent {
  profile = {
    contactLabel: 'Contact Me',
    contact: {
      contactLabelMessage: 'Feel free to contact me',
      name: 'Name',
      subject: 'Subject',
      email: 'E-mail',
      content: 'Your Message',
      send: 'Send'
    },
    basicInfo: {
      value: {
        age: { value: 33, label: 'Age' },
        email: { value: 'contact@gerardohp.dev', label: 'Email' },
        phone: { value: '+52 477 137 3592', label: 'Phone' },
        location: { value: 'León, Guanajuato México', label: 'Location' },
        languages: { value: 'English, Spanish', label: 'Language(s)' }
      },
      label: 'Basic Information'
    }
  };

  render() {
    return (
      <div className="section" id="contact">
        <div
          className="cc-contact-information"
          style={{ backgroundImage: "url('images/staticmap.png')" }}
        >
          <div className="container">
            <div className="cc-contact">
              <div className="row">
                <div className="col-md-9">
                  <div className="card mb-0" data-aos="zoom-in">
                    <div className="h4 text-center title">
                      {this.profile.contactLabel}
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card-body">
                          <form
                            action="https://formspree.io/contact@gerardohp.dev"
                            method="POST"
                          >
                            <div className="p pb-3">
                              <strong>
                                {this.profile.contact.contactLabelMessage}
                              </strong>
                            </div>
                            <div className="row mb-3">
                              <div className="col">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <i className="fa fa-user-circle"></i>
                                  </span>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    placeholder={this.profile.contact.name}
                                    required="required"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <i className="fa fa-file-text"></i>
                                  </span>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="Subject"
                                    placeholder={this.profile.contact.subject}
                                    required="required"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <i className="fa fa-envelope"></i>
                                  </span>
                                  <input
                                    className="form-control"
                                    type="email"
                                    name="_replyto"
                                    placeholder={this.profile.contact.email}
                                    required="required"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    name="message"
                                    placeholder={this.profile.contact.content}
                                    required="required"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >
                                  {this.profile.contact.send}
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <p className="mb-0">
                            <strong>
                              {this.profile.basicInfo.value.location.label}{' '}
                            </strong>
                          </p>
                          <p className="pb-2">{this.profile.basicInfo.value.location.value}</p>
                          <p className="mb-0">
                            <strong>{this.profile.basicInfo.value.phone.label}</strong>
                          </p>
                          <p className="pb-2">{this.profile.basicInfo.value.phone.value}</p>
                          <p className="mb-0">
                            <strong>{this.profile.basicInfo.value.email.label}</strong>
                          </p>
                          <p>{this.profile.basicInfo.value.email.value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
