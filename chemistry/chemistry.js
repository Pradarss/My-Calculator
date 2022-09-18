function aboutp(){
    document.getElementById('about-me').style.display = '';
    document.getElementById('header-container').style.display = 'none';
    document.getElementById('def').style.display = 'none';
    document.getElementById('calculators-grid').style.display = 'none';
    // document.getElementById('main').style.height = '64vh';
}

function home(){
    document.getElementById('about-me').style.display = 'none';
    document.getElementById('intro').style.display = '';
    // document.getElementById('main').style.height = '75vh';
}

function update() {
    // var n1 = parseFloat(document.getElementById('input1').value);
    // var n2 = parseFloat(document.getElementById('input2').value);
    
    var calc = document.getElementById('calculators').value;
    if (calc === 'Calculator-Choice') {
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = '';
        document.getElementById('input2header').innerText = '';
        document.getElementById('input3header').innerText = '';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';

        document.getElementById('def').style.display = 'none';
		document.getElementById('input1header').style.display = 'none';
        document.getElementById('input2header').style.display = 'none';
        document.getElementById('input3header').style.display = 'none';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'hidden';
        document.getElementById('input2').type = 'hidden';
        document.getElementById('input3').type = 'hidden';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = 'hidden';

        document.getElementById('OutputBox').style.display = 'none';
    }
    if(calc === 'molarity-calculator') {
        // document.getElementById('title').innerText = 'Gravitational Force Calculator'
		document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'No. of moles (n)';
        document.getElementById('input2header').innerText = 'Vol. of Sol. in L (L)';
        document.getElementById('input3header').innerText = '';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';

        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = 'none';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'hidden';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'Molar Concentration or Molarity is defined as the number of moles of solute present in a definite amount of liters of the solution, that is, moles per liters of a solution.';

        // document.getElementById('formula').innerHTML = '<img class="gravitation" alt="F=G{\frac{m_1m_2}{r^2}}" src="https://www.gstatic.com/education/formulas2/443397389/en/newton_s_law_of_universal_gravitation.svg" role="img" data-atf="1" data-frt="0">';

    }
    if(calc === 'normality-calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Eq. of solute';
        document.getElementById('input2header').innerText = 'Vol. of Sol. in L (L)';
        document.getElementById('input3header').innerText = '';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';
        
        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = 'none';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'hidden';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'Normality is described as the number of gram or mole equivalents of solute present in one litre of a solution. When we say equivalent, it is the number of moles of reactive units in a compound.';

        // document.getElementById('formula').innerHTML = '<img class="force" alt="F = m * a" src="https://www.gstatic.com/education/formulas2/443397389/en/newtons_second_law.svg" role="img" data-atf="0" data-frt="0">';

    }
    if(calc === 'entropy-calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Total Entropy of products (Sp)';
        document.getElementById('input2header').innerText = 'Total Entropy of reactants (Sr)';
        document.getElementById('input3header').innerText = '';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';
        
		document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
        document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = 'none';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'hidden';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'Entropy is defined as the measurement of degree of randomness or in other words, it is the increase in the disorganization within a system.';

        // document.getElementById('formula').innerHTML = '<img class="acceleration" alt="\overline{a} = \frac{v - v_0}{t} = \frac{\Delta v}{\Delta t}" src="https://www.gstatic.com/education/formulas2/443397389/en/acceleration.svg" role="img" data-atf="0" data-frt="0">';
    }
    if(calc === 'theoretical-yield-calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Actual Yield';
        document.getElementById('input2header').innerText = 'Percent Yield';
        document.getElementById('input3header').innerText = '';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';
        
        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = 'none';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'hidden';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'The quantity of a product obtained from a reaction is expressed in terms of the yield of the reaction. The amount of product predicted by stoichiometry is called the theoretical yield, whereas the amount obtained actually is called the actual yield.';

        // document.getElementById('formula').innerHTML = '<img class="friction" alt="f = \mu N" src="https://www.gstatic.com/education/formulas2/443397389/en/friction_force.svg" role="img" data-atf="0" data-frt="0">';
    }

	if(calc === 'molality-calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Moles of solute (n)';
        document.getElementById('input2header').innerText = 'Weight of solvent in kg (W)';
        document.getElementById('input3header').innerText = '';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';
        
        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = 'none';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'hidden';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'Molality is defined as the “total moles of a solute contained in a kilogram of a solvent.” Molality is also known as molal concentration. It is a measure of solute concentration in a solution.';

        // document.getElementById('formula').innerHTML = '<img class="kinetic" alt="f = \mu N" src="https://cdn.discordapp.com/attachments/946258944534401085/995288463572226121/Screenshot-2020-09-30-at-21.34.18-removebg-preview.png" role="img" data-atf="0" data-frt="0">';
    }

	if(calc === 'activation-energy-calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Temperature (T)';
        document.getElementById('input2header').innerText = 'Rate Constant (K)';
        document.getElementById('input3header').innerText = 'Frequency factor (A)';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';
        
        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = '';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'text';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'Activation energy is the minimum amount of energy required to initiate a reaction. It is the height of the potential energy barrier between the potential energy minima of the reactants and products.';

        // document.getElementById('formula').innerHTML = '<img class="torque" alt="\tau = rF\sin\theta" src="https://www.gstatic.com/education/formulas2/443397389/en/torque.svg" role="img" data-atf="0" data-frt="0">';
    }

	if(calc === 'vanderwaals-equation-calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Temperature (T)';
        document.getElementById('input2header').innerText = 'Number of moles (n)';
        document.getElementById('input3header').innerText = 'Volume (V)';
        document.getElementById('input4header').innerText = 'Attraction b/w particles (a)';
        document.getElementById('input5header').innerText = 'Vol. excluded by a mole (b)';
        
        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = '';
        document.getElementById('input4header').style.display = '';
        document.getElementById('input5header').style.display = '';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'text';
        document.getElementById('input4').type = 'text';
        document.getElementById('input5').type = 'text';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'Van der waal force is the relatively weak attractive forces that act on neutral atoms and molecules and that arise because of the electric polarization induced in each of the particles by the presence of other particles.';

        // document.getElementById('formula').innerHTML = '<img class="inertia" alt="I=\frac{L}{\omega}" src="https://www.gstatic.com/education/formulas2/443397389/en/moment_of_inertia.svg" role="img" data-atf="0" data-frt="0">';
    }

	if(calc === 'nernst-equation-calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Mass (m)';
        document.getElementById('input2header').innerText = 'Volume (v)';
        document.getElementById('input3header').innerText = '';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';
        
        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = '';
        document.getElementById('input4header').style.display = '';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'text';
        document.getElementById('input4').type = 'text';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'The Nernst equation defines the relationship between cell potential to standard potential and to the activities of the electrically active (electroactive) species. It relates the effective concentrations (activities) of the components of a cell reaction to the standard cell potential.';

        // document.getElementById('formula').innerHTML = '<img class="density" alt="\rho ={\frac {m}{V}}" src="https://www.gstatic.com/education/formulas2/443397389/en/density.svg" role="img" data-atf="0" data-frt="0">"';
    }

	if(calc === 'gibbs-free-energy-calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Enthalpy (H)';
        document.getElementById('input2header').innerText = 'Temperature (T)';
        document.getElementById('input3header').innerText = 'Change in entropy (S)';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';
        
        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = '';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'text';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'The Gibbs free energy of a system at any moment in time is defined as the enthalpy of the system minus the product of the temperature times the entropy of the system.';

        // document.getElementById('formula').innerHTML = '<img class="work" alt="W=Fs" src="https://www.gstatic.com/education/formulas2/443397389/en/work.svg" role="img" data-atf="0" data-frt="0">"';
    }

	if(calc === 'battery-life-calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'capacity of battery';
        document.getElementById('input2header').innerText = 'Load current';
        document.getElementById('input3header').innerText = '';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';
        
        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = 'none';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'hidden';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'Battery life is a measure of battery performance and longevity, which can be quantified in several ways: as run time on a full charge, as estimated by a manufacturer in milliampere hours, or as the number of charge cycles until the end of useful life.';

        // document.getElementById('formula').innerHTML = '<img class="charge" alt="W=Fs" src="https://www.gstatic.com/education/formulas2/443397389/en/electric_charge.svg" role="img" data-atf="0" data-frt="0">"';
    }

	if(calc === 'de-broglie-wavelength-calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Energy of Photon(E)';
        document.getElementById('input2header').innerText = '';
        document.getElementById('input3header').innerText = '';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';
        
        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = 'none';
        document.getElementById('input3header').style.display = 'none';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'hidden';
        document.getElementById('input3').type = 'hidden';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'According to wave-particle duality, the De Broglie wavelength is a wavelength manifested in all the objects in quantum mechanics which determines the probability density of finding the object at a given point of the configuration space.';

        // document.getElementById('formula').innerHTML = '<img class="potential" alt="U=m g h" src="https://www.gstatic.com/education/formulas2/443397389/en/gravitational_energy.svg" role="img" data-atf="0" data-frt="0">';
    }
}

function calc()
{
    var n1 = parseFloat(document.getElementById('input1').value);
    var n2 = parseFloat(document.getElementById('input2').value);
    var n3 = parseFloat(document.getElementById('input3').value);
    var n4 = parseFloat(document.getElementById('input4').value);
    var n5 = parseFloat(document.getElementById('input5').value);
    
    var calc = document.getElementById('calculators').value;
    
    if(calc === 'molarity-calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = (n1/n2) + ' M';
    }
    
    if(calc === 'normality-calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = (n1/n2) + ' N';
    }
    
    if(calc === 'entropy-calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = (n1 - n2) + ' J/mol K';
    }
    
    if(calc === 'theoretical-yield-calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = n1 / n2 + ' %';
    }

	if(calc === 'molality-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = (n1/n2) + ' m';
    }

	if(calc === 'activation-energy-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = (-8.31447215 * n1 * Math.log10(n2/n3)) + ' J/mol';
    }

	if(calc === 'vanderwaals-equation-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = ((n2*8.3144621*n1)/(n3-n2*n5))-((n4*n2**2)/(n3**2)) + ' pascal';
    }

	if(calc === 'nernst-equation-calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = (n1-(0.05916/n2)*Math.log10(n3/n4)) + ' Volts';
    }

	if(calc === 'gibbs-free-energy-calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = (n1-(n2*n3)) + 'Kj/mol';
    }

	if(calc === 'battery-life-calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = n1 / n2 + ' mAh';
    }

	if(calc === 'de-broglie-wavelength-calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = (n1*(6.626*(10**(-34))))/(3*(10**8)) + ' m';
    }
	
}