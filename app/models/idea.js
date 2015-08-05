import DS from 'ember-data';

let Idea = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string')
});

Idea.reopenClass({
  FIXTURES: [
    { id: 1,
      title: "First idea",
      body: "Lorem ipsem..."
    },
    { id: 2,
      title: "Second idea",
      body: "Lorem ipsem..."
    },
    { id: 3,
      title: "Third idea",
      body: "Lorem ipsem..."
    },
    { id: 4,
      title: "Forth idea",
      body: "Lorem ipsem..."
    }
  ]
});

export default Idea;
