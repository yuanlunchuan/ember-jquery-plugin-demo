import Ember from 'ember';

export default Ember.Component.extend({
  _initializeJqplot: function(){
    this.$('#chartdiv').jqplot('chartdiv',  [[[1, 2],[3,5.12],[5,13.1],[7,33.6],[9,85.9],[11,219.9]]],
    { title:'Exponential Line',
      axes:{yaxis:{min:-10, max:240}},
      series:[{color:'#5FAB78'}]
    });
  }.on('didInsertElement')
});
