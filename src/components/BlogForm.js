import React, { Component } from "react";

export default class BlogForm extends Component {
  // bu state sadece bu componente ozel , bizim state bilgimiz uygulmanin kullanabilecegi
  // state bilgilerini ayri bir redux state icerisine biz bunlari olusturuyoruz fakar burasi
  // sadece bu forma ozel olucak cunku kullanici burdan inputlardan girdigi degerler  title ve description bilgileri
  // icerisine set edilcek  ve bu state bilgisinide biz istedigimiz zaman redux icersine bir buton araciligiyla gondericez
  // dedigimiz gibi bu state sadece blog forma ait olan kendi componenti icersinde bulunan bir state bilgisi olucak

  state = {
    title: "",
    description: "",
  };
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({
      title,
    }));
  };

  onDescriptionChange = (e) => {
    const description = e.target.description;
    this.setState(() => ({
      description,
    }));
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <input
              placeholder="enter Title"
              value={this.state.title}
              onChange={this.onTitleChange}
            />
          </div>
          <div>
            <textarea
              placeholder="enter description"
              value={this.state.description}
              onChange={this.onDescriptionChange}
            ></textarea>
          </div>
          <div>
            <button>Save Changes</button>
          </div>
        </form>
      </div>
    );
  }
}
