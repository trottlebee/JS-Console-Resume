let myName = "    Tracy Thomas";
let careerField = "Web Developer/Full-Stack Software Developer";
let shortDescription = "Professional Graphic Designer and Branding Professional, looking to make a career shift from print to web. Birmingham, Alabama-based.";
let mySkills = [
    { skill: "Cooking", isCool: true },
    { skill: "Gardening", isCool: true },
    { skill: "Teaching", isCool: false },
    { skill: "Biblical Studies", isCool: false }
];
let myInterests = [" Branding", " Graphic Design", " Web Development", " Software Development", " Music", " Biblical Studies"];
let carPositions = [
    { company: "Trottlebee Graphic Design & Branding", position: "Principal", description: "Provided art direction, graphic design, branding, and integrated marketing for all types of business firms. Specializing in print design for magazines, newsletters, journals, business collateral, and annual reports." },
    { company: "Blue Cross and Blue Shield of Alabama", position: "Senior Graphics Specialist", description: "Responsible for the development, creation, and production of print, web, and electronic communications to effectively educate and inform current members and prospects, employer groups, and providers about Blue Cross and Blue Shield of Alabama products and services. Part of a team of designers who work collaboratively as well as independently to fulfill project requests." },
    { company: "Birmingham-Southern College", position: "Director of Visual Identity & Publications", description: "Directed full production lifecycles of 300+ annual publications from concept through final publication, including quarterly alumni magazine, annual reports, and admissions collateral. Positioned Creative function as a key element of the organization’s value chain and partner to 30+ internal departments. Maximized a $550K+ printing budget." },
    { company: "The Berry Company", position: "Senior Sales Promotion Coordinator", description: "Conceptualized, designed, and rolled out visual sales collateral to facilitate business growth. Quickly and efficiently turned around clean deliverables based on demographic data and consumer market trends. Held accountability for production budgets and established editing, proofing, production, and distribution processes. Produced multimedia and audiovisual slides for executive presentations at industry conferences, sales banquets and training programs." },
];


function displayPosition(company, position, description) {
    console.log("\nPrevious Experience:");
    for (i in carPositions) {
        console.log("* " + carPositions[i].company + ", " + carPositions[i].position + "\n\n- " + carPositions[i].description + "\n\n");
    }
}

// Having trouble with line 30 of this block - unexpected token ?.... //
function displaySkill(skill, isCool) {
    console.log("\nMy Skills:");
    for (i in mySkills) {
        console.log("\t-  " + mySkills[i].skill + ", " + mySkills[i].isCool + "); 
        if (isCool = true) {
            console.log("t- BAM:" + mySkills[i].skill + ", " + mySkills[i].isCool + ");
        } 
    }
}

    function displayInterests() {
        console.log("\nMy interests:");
        for (i of myInterests) {
            console.log("\t-" + i);
        }
    }

    function displayALL() {
        console.log("Name:\t\t" + myName.toUpperCase());
        console.log("Career goal:\t" + careerField);
        console.log("Description:\t" + shortDescription);
        displayInterests();
        displaySkill();
        displayPosition();
    }

    displayALL();