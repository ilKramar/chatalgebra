import React, { Component } from "react";
import "./css/App.css";
import Messages from "./components/Messages";
import Input from "./components/Input";


function randomName() {
  const adjectives = [
    "jesenji", "skriveni", "gorak", "maglovit", "tih", "prazan", "suho", "tamno",
    "ljetni", "ledeni", "delikatan", "tih", "bijel", "hladan", "proljetni", "zimski",
    "strpljiv", "sumrak", "zora", "grimizan", "nježan", "dotrajal", "plav",
    "valovit", "slomljen", "hladan", "vlažan", "padajuć", "smrznut", "zelen", "dug",
    "kasn", "zadržan", "hrabar", "mali", "jutarnji", "blatan", "star", "crven",
    "hrapav", "miran", "mali", "sjajuć", "kucajuć", "stidljiv", "lutajuć",
    "venčan", "divlji", "crn", "mlad", "svet", "usamljen", "mirisan",
    "starinski", "snježan", "ponosan", "cvjetan", "nemiran", "božanski", "poliran",
    "drevan", "ljubičast", "živahan", "bezimen"
  ];
  
  const nouns = [
    "vodopad", "rijeka", "povjetarac", "mjesec", "kiša", "vjetar", "more", "jutro",
    "snijeg", "jezero", "zalazak sunca", "bor", "sjena", "list", "zora", "sjaj",
    "šuma", "brdo", "oblak", "livada", "sunce", "čistina", "ptica", "potok",
    "leptir", "žbun", "rosa", "prašina", "polje", "vatra", "cvijet", "svjetionica",
    "pero", "trava", "magla", "planina", "noć", "ribnjak", "tamnoća",
    "snježna pahulja", "tišina", "zvuk", "nebo", "oblik", "val", "grom",
    "ljubičica", "voda", "divlji cvijet", "val", "voda", "rezonanca", "sunce",
    "drvo", "san", "trešnja", "drvo", "magla", "mraz", "glas", "papir", "žaba",
    "dim", "zvijezda"
  ];
  
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

class App extends Component {
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomColor(),
    }
  }

  constructor() {
    super();
    this.drone = new window.Scaledrone("JvAl7xuvfsVhNcND", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });
    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({member, text: data});
      this.setState({messages});
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Moja soba</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input
          onSendMessage={this.onSendMessage}
        />
      </div>
    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

}

export default App;

