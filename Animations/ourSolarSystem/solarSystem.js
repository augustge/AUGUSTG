
// FOUND AT
// https://ssd.jpl.nasa.gov/horizons.cgi#top
// Ephemeris Type [change] : 	VECTORS
// Target Body [change] : 	?????
// Coordinate Origin [change] : 	Solar System Barycenter (SSB) [500@0]
// Time Span [change] : 	Start=2019-11-24, Stop=2019-12-24, Step=1 d
// Table Settings [change] : 	defaults
// Display/Output [change] : 	default (formatted HTML)

// Using units
var DAY   = 1
var AU    = 1
var Msun  = 1

var kg,km,second,yr,G;
var OBJECTS;




function setup(){
  var C = createCanvas(windowWidth, windowHeight);
  C.parent("sketch-holder");

  // Derived units
  kg      = 1/1988500e24 * Msun
  km      = 6.68459e-9   * AU
  second  = 1.15741e-5   * DAY
  yr      = 365.2422     * DAY
  // Constants
  G  = 4*PI*PI/(1.000003040321850) * AU*AU*AU/(Msun*yr*yr);


  today =  new Date()
  time  = new Date("2019-Nov-24"); // time of evalutation of positions
   // time.setDate(time.getDate() + days);

  OBJECTS = [];
  defineObjects();

}

function draw(){
  background(255)
}


class PlanetaryObject{
  constructor(name,m,rho,R,V,omega){
    this.name   = name
    this.m      = m;      // kg
    this.R0     = R;      // au
    this.V0     = V;      // au/day
    this.omega  = omega;  // rad/s
  }

  show(){

  }
}


function defineObjects(){
  OBJECTS.push(new PlanetaryObject("sun",1988500e24*kg,1.408,[-3.479548933206940E-03,  7.507892942541419E-03,  1.423980327224241E-05],[-8.435057902017636E-06, -1.581020074796732E-06,  2.316035750316440E-07],NaN))
  OBJECTS.push(new PlanetaryObject("mercury",3.302e23*kg,5.427,[-1.876381520248047E-01,2.729851094974095E-01,3.860137493283028E-02],[-2.880212527702528E-02,-1.494342400244370E-02,1.420667180887246E-03],0.00000124001))
  OBJECTS.push(new PlanetaryObject("venus",48.685e23*kg,5.204,[4.023968825346559E-01,-5.962091282848500E-01,-3.169155319477308E-02],[1.664224228107012E-02, 1.121337992902592E-02,-8.067471145448681E-04],-0.00000029924))
  OBJECTS.push(new PlanetaryObject("earth",5.97219e24*kg,5.51,[-2.608413001094073E-05,1.345503901669021E-05,-3.088755378468301E-05],[-1.551834601442038E-04,-1.504104302583198E-04,6.552954489098809E-05],0.00007292115))
  OBJECTS.push(new PlanetaryObject("mars",6.4171e23*kg,3.933,[-1.566507615289128E+00,-4.433615397451655E-01,2.891647917431645E-02],[4.391855643405547E-03,-1.225048536738343E-02,-3.644055920216107E-04],0.0000708822))
  OBJECTS.push(new PlanetaryObject("jupiter",1898.13e24*kg,1.326,[2.398987905478092E-01,-5.228171375084345E+00,1.631569440344870E-02],[7.446437966068977E-03,7.062325348503164E-04,-1.694754675721655E-04],0.00017585))
  OBJECTS.push(new PlanetaryObject("saturn",5.6834e26*kg,0.687,[3.608156454272707E+00, -9.358275564678564E+00,  1.908357576490018E-02],[4.896951055905732E-03,  1.989884808683989E-03, -2.292889283131322E-04],0.000163785))
  OBJECTS.push(new PlanetaryObject("uranus",86.813e24*kg,1.271,[1.630821662260476E+01,  1.127079949171262E+01, -1.694148786793367E-01],[-2.264989811476159E-03, 3.052281082250763E-03,  4.077335412490153E-05],-0.000101237))
  OBJECTS.push(new PlanetaryObject("neptune",102.413e24*kg,1.638,[2.921421858952530E+01, -6.476969762720352E+00, -5.398896941636903E-01],[6.588961955221450E-04,  3.083793907671489E-03, -7.849918779045290E-05],0.000108338))
  OBJECTS.push(new PlanetaryObject("ganymede",1482e20*kg,1.94,[2.395026592191973E-01, -5.221027735991870E+00,  1.658125273503958E-02],[1.175713154753192E-03,  3.739345366573758E-04, -2.669029234793870E-04],NaN))
  OBJECTS.push(new PlanetaryObject("titan",13455.3e19*kg,1.880,[3.614581049204343E+00, -9.354301777353360E+00,  1.639596372648561E-02],[3.015529906786324E-03,  4.447469385100544E-03, -1.308797299398324E-03],NaN))
  OBJECTS.push(new PlanetaryObject("callisto",1076e20*kg,1.851,[2.309391455919436E-01, -5.237099757979207E+00,  1.591339876323325E-02],[1.078829804499844E-02, -2.614813825368700E-03, -2.292944111904776E-04],NaN))
  OBJECTS.push(new PlanetaryObject("io",893.3e20*kg,3.530,[2.374309519355300E-01, -5.226813260521281E+00,  1.632928306577299E-02],[2.581200915250378E-03, -8.046466476316565E-03, -5.601519022307468E-04],NaN))
  OBJECTS.push(new PlanetaryObject("moon",7.349e22*kg,3.3437,[4.711953447714849E-01,  8.710900717136029E-01,  1.818446162250391E-04],[-1.509113308996579E-02,  7.689876296218871E-03, -1.609428746041303E-05],0.0000026617))
  OBJECTS.push(new PlanetaryObject("europa",479.7e20*kg,2.99,[2.416214051431489E-01, -5.232274953191260E+00,  1.618482144669543E-02],[1.483448831946814E-02,  3.750357969044653E-03,  1.103980055677597E-04],NaN))
  OBJECTS.push(new PlanetaryObject("pluto",1.307e22*kg,1.86,[1.285990230840684E+01, -3.138276448501142E+01, -3.617005212124610E-01],[2.975164667645290E-03,  5.296407568110372E-04, -9.045237793018655E-04],0.0000113856))
  OBJECTS.push(new PlanetaryObject("triton",214.7e20*kg,2.054,[2.921587280200924E+01, -6.477326586914225E+00, -5.415479029135662E-01],[-6.192374693337490E-04,  1.061016987936212E-03, -9.168646889495590E-04],NaN))
}
