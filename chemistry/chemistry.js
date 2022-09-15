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
    if(calc === 'Friction-Calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Friction Coefficient (μ)';
        document.getElementById('input2header').innerText = 'Normal Force (N)';
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

		document.getElementById('def').innerHTML = 'Friction is a type of relative force that acts as a resistance between two bodies that are in contact with each other. In other words when two bodies are in contact with each other there exists a force which opposes their relative motion.';

        document.getElementById('formula').innerHTML = '<img class="friction" alt="f = \mu N" src="https://www.gstatic.com/education/formulas2/443397389/en/friction_force.svg" role="img" data-atf="0" data-frt="0">';
    }

	if(calc === 'molality-Calculator') {
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

	if(calc === 'activation-energy-Calculator') {
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

	if(calc === 'Inertia-Calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Angular Momentum (l)';
        document.getElementById('input2header').innerText = 'Angular Velocity (w)';
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

		document.getElementById('def').innerHTML = 'A  property of matter by which it continues in its existing state of rest or uniform motion in a straight line, unless that state is changed by an external force.';

        document.getElementById('formula').innerHTML = '<img class="inertia" alt="I=\frac{L}{\omega}" src="https://www.gstatic.com/education/formulas2/443397389/en/moment_of_inertia.svg" role="img" data-atf="0" data-frt="0">';
    }

	if(calc === 'Density-Calculator') {
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

		document.getElementById('def').innerHTML = 'Density is the measurement of how tightly a material is packed together. It is defined as the mass per unit volume.';

        document.getElementById('formula').innerHTML = '<img class="density" alt="\rho ={\frac {m}{V}}" src="https://www.gstatic.com/education/formulas2/443397389/en/density.svg" role="img" data-atf="0" data-frt="0">"';
    }

	if(calc === 'Work-Done-Calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Force (f)';
        document.getElementById('input2header').innerText = 'Displacement (s)';
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

		document.getElementById('def').innerHTML = 'It is done only when a constant force applied on an object cause the object to move in the same direction as the force applied.\nWork is the product of force and displacement. In physics, a force is said to do work if, when acting, there is a movement of the point of application in the direction of the force.';

        document.getElementById('formula').innerHTML = '<img class="work" alt="W=Fs" src="https://www.gstatic.com/education/formulas2/443397389/en/work.svg" role="img" data-atf="0" data-frt="0">"';
    }

	if(calc === 'Charge-Calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Current (i)';
        document.getElementById('input2header').innerText = 'time (t)';
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

		document.getElementById('def').innerHTML = 'Electric charge is the basic physical property of matter that causes it to experience a force when kept in an electric or magnetic field. An electric charge is associated with an electric field and the moving electric charge generates a magnetic field.';

        document.getElementById('formula').innerHTML = '<img class="charge" alt="W=Fs" src="https://www.gstatic.com/education/formulas2/443397389/en/electric_charge.svg" role="img" data-atf="0" data-frt="0">"';
    }

	if(calc === 'Potential-Energy-Calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Mass (m)';
        document.getElementById('input2header').innerText = 'Height (h)';
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

		document.getElementById('def').innerHTML = 'potential energy, stored energy that depends upon the relative position of various parts of a system. A spring has more potential energy when it is compressed or stretched. A steel ball has more potential energy raised above the ground than it has after falling to Earth.';

        document.getElementById('formula').innerHTML = '<img class="potential" alt="U=m g h" src="https://www.gstatic.com/education/formulas2/443397389/en/gravitational_energy.svg" role="img" data-atf="0" data-frt="0">';
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
    
    if(calc === 'friction-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = n1 * n2 + ' N';
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

	if(calc === 'Inertia-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = n1 / n2 + ' Kg m²';
    }

	if(calc === 'Density-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = n1 / n2 + ' Kg/m³';
    }

	if(calc === 'Work-Done-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = n1 * n2 + ' J';
    }

	if(calc === 'Charge-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = n1 * n2 + ' C';
    }

	if(calc === 'Potential-Energy-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = n1 * n2 * 9.8 + ' J';
    }
	
}