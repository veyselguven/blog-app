import React, { Component } from "react";
// bu blog formumuz hem bir blog ekleme hemde var olan bir blogu guncellememiz icin kullanilicak,
//dolayisiyla ekleme islemini burda yapmicaz ekleme islemini addBlogPage icersinde yapicaz

export default class BlogForm extends Component {
  // bu state sadece bu componente ozel , bizim state bilgimiz uygulmanin kullanabilecegi
  // state bilgilerini ayri bir redux state icerisine biz bunlari olusturuyoruz fakar burasi
  // sadece bu forma ozel olucak cunku kullanici burdan inputlardan girdigi degerler  title ve description bilgileri
  // icerisine set edilcek  ve bu state bilgisinide biz istedigimiz zaman redux icersine bir buton araciligiyla gondericez
  // dedigimiz gibi bu state sadece blog forma ait olan kendi componenti icersinde bulunan bir state bilgisi olucak

  state = {
    title: "",
    description: "",
    error: "",
  };

  // simdi bize gelecek olan state bilgisi icerisindeki alanlarini bir blok objesi olarak
  // ilgili redux icersindeki blog listesi icerisine eklememiz gerekiyor
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({
      title,
    }));
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({
      description,
    }));
  };
  onSubmit = (e) => {
    e.preventDefault(); // submit yaptigimizda sayfa yenilenir fakat sayfaninin yenilenmemesi icin bu defaultu kullaniyoruz

    if (!this.state.title || !this.state.description) {
      this.setState({ error: "Lutfen tum alanlari doldurunuz" });
    } else {
      this.setState({ error: "" });
      // console.log("submitted");
      // console.log(this.state.title, this.state.description);
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        dateAdded: Date.now(),
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error}
        <form onSubmit={this.onSubmit}>
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
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    );
  }
}
