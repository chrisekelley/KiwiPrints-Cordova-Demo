// Generated by CoffeeScript 1.6.3
var QuestionCollection, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

QuestionCollection = (function(_super) {
  __extends(QuestionCollection, _super);

  function QuestionCollection() {
    _ref = QuestionCollection.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  QuestionCollection.prototype.model = Question;

  QuestionCollection.prototype.url = '/question';

  QuestionCollection.prototype.sync = BackbonePouch.sync({
    db: PouchDB(Coconut.db_name),
    fetch: 'query',
    options: {
      query: {
        include_docs: true,
        fun: QUERIES.byQuestion
      }
    }
  });

  QuestionCollection.prototype.parse = function(result) {
    return _.pluck(result.rows, 'value');
  };

  return QuestionCollection;

})(Backbone.Collection);