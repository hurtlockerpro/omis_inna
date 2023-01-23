
/*----------- Calculator code -----------*/
(function($){

	var GeneratorsCalculator = function(cfg){
		cfg = cfg || {};
		
		var self = this;

		this.cfg = {
		  avg: 0.362,
		  k0:  1000,
		  k1:  0.9,
		  years: [1, 5, 10, 25],
		  maxPower: 15,
		  maxPrice: 2,
		  defaultPower: 3
		};
		
		for(var k in cfg){
		  this.cfg = cfg;
		}
		
		var lbls = {produced:{},income:{}};
		for(var i=0;i<this.cfg.years.length;i++){
		  var k = this.cfg.years[i];
		  lbls.produced[k+ 'y'] = $('#' +k+ 'GenerationVal .payback-income__item-sum strong');
		  lbls.income[k+ 'y']   = $('#' +k+ 'PaybackVal .payback-income__item-sum strong');
		}
		
		this.labels = lbls;
			
		this.calc = function(input){
			input = ~~input;
			
			var y = input * self.cfg.k0 * 0.9;
			
			var res = {produced:{}, income:{}};
			for(var i=0;i<self.cfg.years.length;i++){
			  var k = self.cfg.years[i];
			  res.produced[k+ 'y'] = Math.round(y * k);
			  var inc = res.produced[k+ 'y'] * self.cfg.avg;
			  inc = Number( inc.toFixed(2) );
			  if(inc != Math.round(inc)){
				inc = inc.toFixed(2);
			  }
			  res.income[k+ 'y'] = inc;
			}

			return res;		
		};
		
		this.updatePage = function(input){
			if(typeof input === 'undefined'){
			  input = self.cfg.defaultPower;
			}
			
			var d = self.calc(input);
			
			for(var i=0;i<self.cfg.years.length;i++){
			  var k = self.cfg.years[i];
			  self.labels.income[k+ 'y'][0].innerHTML = d.income[k+ 'y']+' €';
			  self.labels.produced[k+ 'y'][0].innerHTML = d.produced[k+ 'y']+' kW';
			}
		};
	};
	
	window.GeneratorsCalculator = new GeneratorsCalculator();

	$('.calculations-line').on("mousedown touchstart", function(e) {		
		e.preventDefault();
		
		var el = $(this);
		var gen = window.GeneratorsCalculator;
		
		var drag = el.find(".calculations-drag");
		drag.addClass("active");
		var offset = 0;
		"mousedown" == e.type ? offset = e.pageX : "touchstart" == e.type && (offset = e.touches[0].pageX);	
		var left = offset - el.offset().left;
		
		drag.css({
		  left: left
		});
		
		var updPos = function(el0, el1, mode){
			var w1 = el0.width();
			var w2 = el1.offset().left - el0.offset().left + el1.width() / 2; 
			var v;
			if(mode === 'power'){
			  v = (gen.cfg.maxPower || 50) / w1 * w2;
			  v = v.toFixed(0);
			  el1.find(".calculations-value .power-output").html(v + ' kW');
			  gen.cfg.defaultPower = Number(v);
			  gen.updatePage(Number(v));
			} else if(mode === 'price'){
			  v = (gen.cfg.maxPrice || 50) / w1 * w2;
			  v = v.toFixed(2);
			  gen.cfg.avg = Number(v);			  
			  el1.find(".calculations-value .price-output").html(v + ' €');
			  gen.updatePage();
			}	
			
		};

		$(".calculations").on("mousemove touchmove", function(e) {
			var offset;
			e.preventDefault();
			"mousemove" == e.type ? offset = e.pageX : "touchmove" == e.type && (offset = e.touches[0].pageX);
			var left = offset - el.offset().left;
			left = left >= el.width() ? el.width() : left <= 0 ? 0 : left;
			drag.css({
				left: left
			});
			
			updPos($('#linePower'), $('#linePower').find(".calculations-drag"), 'power');
			updPos($('#linePrice'), $('#linePrice').find(".calculations-drag"), 'price');
		});

		var ontouchend = function(e){
			e.preventDefault();
			$(".calculations").unbind("mousemove touchmove");
			$(".calculations").unbind("mouseup touchend");
			$(".calculations").unbind("mouseleave touchleave");
			drag.removeClass("active");
						
			updPos($('#linePower'), $('#linePower').find(".calculations-drag"), 'power');
			updPos($('#linePrice'), $('#linePrice').find(".calculations-drag"), 'price');			
		};
		
		$(".calculations").on("mouseup touchend", ontouchend);
		$(".calculationss").on("mouseleave touchleave", ontouchend);
		
	});	
	
	var setDefault = function(){
		var gen = window.GeneratorsCalculator;
		
		var def = Number( gen.cfg.defaultPower );
		var max = gen.cfg.maxPower || 50;
		
		var p = ((def/max) * $('#linePower').width());
		
		$('#linePower').find(".calculations-drag").css({
			left: p+ 'px'
		});		
		$('#linePower').find(".calculations-drag").find(".calculations-value .power-output").html(def + ' kW');
		
		def = Number( gen.cfg.avg );
		max = gen.cfg.maxPrice || 2;
		
		p = ((def/max) * $('#linePrice').width());
		
		$('#linePrice').find(".calculations-drag").css({
			left: p+ 'px'
		});		
		$('#linePrice').find(".calculations-drag").find(".calculations-value .price-output").html(def + ' €');		
	};
	
	setDefault();
	
})(window.jQuery);
