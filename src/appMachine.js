import { createMachine, assign, spawn } from 'xstate';

export const appMachine = createMachine({
  "id": "appMachine",
  "context": {
    "message": "no message",
    "shapeRef1": null,
    "shapRef2": null,
    "count": 0,
    "color": "#ff8800"
  },
  "initial": "home",
  "states": {
    "home": {
      
      "on": {
        "menu.loading": {
          "target": "loading"
        }
      }
    },
    "loading": {
      "after": {
        "3000": {
          "target": "#appMachine.play",
          "actions": [],
          "internal": false
        }
      }
    },
    "play": {
      "on": {
        "menu.home": {
          "target": "home"
        }
      }
    }
  },
  "on": {
    "toggleColor": {
      "actions": {
        "params": {},
        "type": "toggleColor"
      }
    },
    "getSnapShots": {
      "actions": {
        "params": {},
        "type": "getActorData"
      }
    }
  }
}, {
      actions: {"getActorData": ({ context, event }) => {},
                "toggleColor": assign({
                  color: ( context, event ) => context.color = context.color == "blue" ? 'red' : "blue"
                }),
              },
      actors: {},
      guards: {},
      delays: {},
    })

