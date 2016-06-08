import Ember from 'ember';

export default Ember.Component.extend({
  _initailizeKnob: function(){
    var self = this;
    this.$().knob({
      fgColor: this.get('fgColor'),
      change: function(v){
        self.set('value', v);
      }
    });
  }.on('didInsertElement'),

  _valueChanged: function(){
    this.$().val(this.get('value')).trigger('change');
  }.observes('value')
});
