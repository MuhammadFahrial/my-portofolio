import React, { useState } from "react";
import email from "../../../../assets/gmail.png";
import phone from "../../../../assets/phone.png";

export default function Contact() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  // fungsi untuk mengambil hasil inputan
  const handleInputName = (event) => {
    setInputName(event.target.value);
  };
  const handleInputEmail = (event) => {
    setInputEmail(event.target.value);
  };
  const handleInputMessage = (event) => {
    setInputMessage(event.target.value);
  };

  // fungsi untuk kondisi pda button
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputName || !inputMessage) {
      alert("Please fill in both the name and message fields");
      return;
    }
    // const whatsappUrl = `https://wa.me/6281342608949?text=Assalamualaikum%20Warahmatullahi%20Wabarakatuh,%0APerkenalkan%20Saya%20${inputName}%0A%0A${inputMessage}`;
    // window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="mx-[10%]">
        <div className="contact my-8 xl:flex justify-between items-center h-full xl:my-32">
          <div className="header">
            <h1
              className="text-[28px] xl:text-[38px] font-bold
            "
            >
              Let's Talk |
            </h1>

            <div className="xl:flex justify-between items-start ">
              <div className="left-side">
                <p className=" xl:w-[600px] text-[16px] font-light mb-8">
                  Ask us anything or just say hi....
                </p>
              </div>
              <div className="right-side flex gap-1 text-[14px]">
                <form action="" onSubmit={handleSubmit}>
                  <div className="name-mail xl:flex gap-12">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={inputName}
                      onChange={handleInputName}
                      placeholder="Your Name"
                      className="bg-[#061121] border-b p-2 outline-none text-[12px]"
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={inputEmail}
                      onChange={handleInputEmail}
                      placeholder="Yourmail@domain.com"
                      className="bg-[#061121] border-b p-2 outline-none text-[12px]"
                    />
                  </div>
                  <div className="message mb-6">
                    <input
                      type="text"
                      name="message"
                      id="message"
                      value={inputMessage}
                      onChange={handleInputMessage}
                      placeholder="What do you want ......"
                      className="bg-[#061121] border-b p-2 outline-none text-[12px] mt-4 xl:mt-6"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="bg-white text-black py-2 px-4 rounded-lg"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className="phone flex items-center gap-6 mb-2 mt-12 xl:mt-0 text-[14px]">
              <img src={phone} alt="" className="" />
              <p>+62813xxxxxxxx</p>
            </div>
            <div className="gmail flex items-center gap-6 mt-2 text-[14px]">
              <img src={email} alt="" />
              <p>andimuhammadfahrials@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
