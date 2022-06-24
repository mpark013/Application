class World {
  
  constructor() {
  }
  
  update() {
  }
  
  secrets() {
    if(worldFlag === 3) {
    if(player.deltax === 600) {
      grid[3][9].block = false;
      grid[4][9].block = false;
      grid[5][9].block = false;
      grid[6][9].block = false;
      }
    }

    
  }
  make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
      }
    return arr;
  }
  drawText(input, textx, texty) {
    let output = "";
    for (var i = 0; i < input.length; i += 1) {
      output += input.charAt(i);
    }
    text(output, textx, texty);
    textSize(36);
  }
  playvid(file) {
    if(playing) {
      vid.stop();
      vid.hide();
      return;
    } else {
      vid = createVideo(str(file));
      vid.size(801,801);
      vid.position(-4,80);
      vid.play();
      vid.noLoop();
    }
    playing = !playing;
  }

  checkWorld() {
    if(worldFlag === 1) {
    textSize(36);
        ///FIRST WORLD///
    this.drawText("Welcome to an example of my syllabus", 90, 200);
    if(millis() > 5000) {
      this.drawText("You can use the arrow keys to move!", 100,600);
    }
    if(player.x >= 760) {
      if ( 240 < player.y && player.y < 560) {
        world.secondWorld();
      }
      else return;
    }
  } else if (worldFlag === 2) {
    
        ///SECOND WORLD///
    this.drawText("Continue through the rooms to see",100,200);
    this.drawText("a bit about me, my teaching style,", 120, 240);
    this.drawText("my teaching philosophy, and more.", 110, 280);
    this.drawText("Just follow the directions!", 200, 560);
    if(player.x >= 760) {
      if ( 240 < player.y && player.y < 560) {
        world.thirdWorld();
      }
      else return;
    } else if (player.x <= 40) {
      if ( 240 < player.y && player.y < 560) {
        world.curiousWorld();
    } else return;
    }
    } else if (worldFlag === 3) {

        ///THIRD WORLD///

    this.drawText("I'm a certified teacher who has", 120,200);
    this.drawText("taught a diverse range of students", 110,240);
    this.drawText("ranging every socioeconomic status,", 100,280);
    this.drawText("age range, and language capability", 110, 320);
    this.drawText("using our universal curiosity.", 170, 360);
    this.drawText("Keep going right to learn more!", 150, 620);
    
    if(player.x >= 760) {
      if ( 240 < player.y && player.y < 560) {
        world.fourthWorld();
      }
      else return;
    } else if (player.x <= 40) {
      if ( 240 < player.y && player.y < 560) {
        world.secondWorld();
    } else return;
    }  else if(player.y >= 760) {
      if ( 240 < player.x && player.x < 560) {
        world.inquiryWorld();
      }
      else return;
    }
  } else if (worldFlag === 4) {

        ///FOURTH WORLD///

    this.drawText("I tinker with circuits, design with CAD,", 100, 200);
    this.drawText("code with JS, and build with whatever.", 100, 240);
    this.drawText("I've made desks, drones, games, and more.",70,280);
    this.drawText("I grew up in Virginia, USA and love to", 100, 460);
    this.drawText("travel, explore new cultures, histories", 100, 500);
    this.drawText("and meet new people", 200, 540);
    if(player.x >= 760) {
      if ( 240 < player.y && player.y < 560) {
        world.choiceWorld();
      }
      else return;
    } else if (player.x <= 40) {
      if ( 240 < player.y && player.y < 560) {
        world.thirdWorld();
    } else return;
    }
  }  else if (worldFlag === 5) {
      
        ///CHOICE WORLD///
    //Right side Exit//
    if(player.x >= 760) {
      if ( 240 < player.y && player.y < 560) {
        world.appDesign();
      }
      else return;
      //Left side Exit//
    } else if (player.x <= 40) {
      if ( 240 < player.y && player.y < 560) {
        world.gameDesign();
    } else return;
    }
    //Bot side Exit///
    if(player.y >= 760) {
      if ( 240 < player.x && player.x < 560) {
        world.webDesign();
      }
      else return;
      //Top side Exit//
    } else if (player.y <= 40) {
      if ( 240 < player.x && player.x < 560) {
        world.introCode();
    } else return;
    }
    this.drawText("Mathematics >", 500,400);
    this.drawText("< Design Technology", 20,400);
    this.drawText("v",360,760);
    this.drawText("Engineering", 280,720);
    this.drawText("^",360,40);
    this.drawText("Computer Science", 260,80);
    
    if(interest > 4) {
      this.drawText("Thank you for exploring!", 200, 280);
      this.drawText("Here's a bit I've learned about you:", 120, 320);
      if(interest > 7) {this.drawText("You're interested in each of my topics",80,460)};
      if(curious){this.drawText("You're more likely to bend rules for curiosity",80,500)};
      if(gamer){this.drawText("You play computer games",80,540)};
      if(investigative){this.drawText("You're not just curious, but investigative",80,580)};
      
    }
    
  }  else if (worldFlag === 6) {
        ///Engineering WORLD///
    this.drawText("Engineering covers a very broad base", 110,160);
    this.drawText("so I start my course finding what my", 120, 200);
    this.drawText("students believe engineering is and", 110, 240);
    this.drawText("what exactly they're interested in.", 120, 280);
    this.drawText("I then help build their cooperative,", 120, 360);
    this.drawText("critical thinking, and creative skills", 100, 400);
    this.drawText("using projects before splitting the", 110, 440);    
    this.drawText("class into sections based on their", 120, 480);
    this.drawText("interests to personalize learning.", 120, 520);
    
      if(player.y >= 760) {
        if ( 240 < player.x && player.x < 560) {
          world.webDesign2();
        }
      }
      if (player.y <= 40) {
        if ( 240 < player.x && player.x < 560) {
          world.choiceWorld();
        }
      }
  }  else if (worldFlag === 62) {

        ///engineering WORLD 2///
    image(website,110,280, 600, 400);

    this.drawText("For example, my first project is", 140,140);
    this.drawText("often a Rube Goldberg Machine to",120,180);
    this.drawText("teach collaborative and creative",120,220);
    this.drawText("skills in a fun environment",160,260);

      if (player.y <= 40) {
        if ( 240 < player.x && player.x < 560) {
          world.choiceWorld();
        } else return;
      }
    }  else if (worldFlag === 7) {
        ///Something WORLD///
    this.drawText("If allowed a more explorational course,", 110,160);
    this.drawText("I can use my CS and technology skills", 100, 200);
    this.drawText("to help students develop their ability", 110, 240);
    this.drawText("to use technology to create works of art", 100, 280);
    this.drawText("by mixing their creativity with computers.", 90, 320);
    this.drawText("Depending on student interest, this may", 100, 440);    
    this.drawText("be games, movies, apps, sites, and more", 100, 480);
    this.drawText("that they'll make with my guidance to", 100, 520);
    this.drawText("give them the most pride in their work.",120, 560);
    
     if (player.x <= 40) {
      if ( 240 < player.y && player.y < 560) {
        world.gameDesign2();
      }
     }
      if(player.x >= 760) {
        if ( 240 < player.y && player.y < 560) {
          world.choiceWorld();
      } else return;
    }
  }  else if (worldFlag === 72) {
    
        ///Something WORLD 2///
    image(goGif,300,180, 200, 200);
    
    this.drawText("This allows students to learn and", 140, 440);    
    this.drawText("further respect the work that goes", 120, 480);
    this.drawText("into the technology they use and", 120, 520);
    this.drawText("better approach the digitial world.", 120,560);
    
      if(player.x >= 760) {
        if ( 240 < player.y && player.y < 560) {
          world.choiceWorld();
        } else return;
      }
    }  else if (worldFlag === 8) {
        ///Math WORLD///
    
    this.drawText("Everybody loves math!", 230,160);
    this.drawText("Some just don't know it yet", 200, 200);
    this.drawText("This philosopohy drives my style to", 120, 240);
    this.drawText("inspire student to find what they love.", 110, 280);
    this.drawText("This ranges from the utility of math,", 100, 440);
    this.drawText("its ability to quantify imagination,", 120, 480);    
    this.drawText("and more as they develop their skills.", 100, 520);
    
     if(player.x >= 760) {
        if ( 240 < player.y && player.y < 560) {
          world.appDesign2();
        }
      }
      if (player.x <= 40) {
        if ( 240 < player.y && player.y < 560) {
          world.choiceWorld();
      } else return;
    }
  }  else if (worldFlag === 82) {

        ///APP DESIGN 2///
    image(kaopic,300,180, 200, 200);

    this.drawText("For example, I love the mind-blowing", 100, 440);    
    this.drawText("predictive infinity of fractals like", 120, 480);
    this.drawText("the mandelbrot set. I use my love for", 110, 520);
    this.drawText("things like this and my knowledge of", 100,560);
    this.drawText("math's usefullness to inspire my kids.", 100,600);
    
      if(player.x <= 40) {
        if ( 240 < player.y && player.y < 560) {
          world.choiceWorld();
        } else return;
      }
    }  else if (worldFlag === 9) {
        ///Computer Science///

        this.drawText("I start students off with pseudocode", 100,160);
        this.drawText("to learn their aptitude, interests,", 120, 200);
        this.drawText("and develop their foundation for", 120, 240);
        this.drawText("using algorithms and logic to create", 110, 280);
        this.drawText("projects that they can be proud of.", 120, 320);
        this.drawText("I focus on helping students develop", 120, 440);
        this.drawText("their problem solving and critical", 140, 480);
        this.drawText("skills, their persistance, and their", 120, 520);
        this.drawText("collaboration by assigning projects.", 110, 560);

     if(player.y <= 40) {
        if ( 240 < player.x && player.x < 560) {
          world.introCode2();
        }
      }
      if(player.y >= 760) {
        if ( 240 < player.x && player.x < 560) {
          world.choiceWorld();
        } else return;
      }
    }  else if (worldFlag === 92) {
    
        ///Computer Science///
      image(golGif,220,340);

        this.drawText("The Game of Life is an inspiration for", 110,160);
        this.drawText("why I think students should learn coding.", 100, 200);
        this.drawText("Using a few lines of code and imagination,", 80, 240);
        this.drawText("this algorithm can change the way you", 90, 280);
        this.drawText("see the universe, simulations, and more.", 80, 320);
        this.drawText("I use this simple script to introduce,", 160,640);
        this.drawText("develop, and ensure mastery of CS.", 120, 680);
      
      if(player.y >= 760) {
        if ( 240 < player.x && player.x < 560) {
          world.choiceWorld();
        } else return;
      }
    }  else if (worldFlag === 10) {
    
        ///CURIOSITY WORLD///
      this.drawText("I appreciate curiosity :)", 180,400);
      if(player.x >= 760) {
        if ( 240 < player.y && player.y < 560) {
          world.secondWorld();
        }
        else return;
      }
    } else if (worldFlag === 11) {
    
        ///Inquiry WORLD///
      if (curious) {
        this.drawText("I don't know what brought you here,", 120,160);
        this.drawText("but I admire it and how much you have.",90,200);
        interested = true;
        
      }  else {
        this.drawText("I appreciate curiosity :)", 200,400);

      }
        if(240 < player.x < 560 && player.y <= 40) {
          world.thirdWorld();
          investigative = true;
      }
    }
  }
  baseWorld() {
    //left col
    grid[0][0].block = true;
    grid[0][1].block = true;
    grid[0][2].block = true;
      //left door
    grid[0][3].block = false;
    grid[0][4].block = false;
    grid[0][5].block = false;
    grid[0][6].block = false;

    grid[0][7].block = true;
    grid[0][8].block = true;
    grid[0][9].block = true;

    //top row
    grid[1][0].block = true;
    grid[2][0].block = true;
      //top door
    grid[3][0].block = false;
    grid[4][0].block = false;
    grid[5][0].block = false;
    grid[6][0].block = false;

    grid[7][0].block = true;
    grid[8][0].block = true;
    grid[9][0].block = true;

    //bottom row
    grid[1][9].block = true;
    grid[2][9].block = true;
      //bottom door
    grid[3][9].block = false;
    grid[4][9].block = false;
    grid[5][9].block = false;
    grid[6][9].block = false;
    
    grid[7][9].block = true;
    grid[8][9].block = true;

    //right col
    grid[9][1].block = true;
    grid[9][2].block = true;
      //right door
    grid[9][3].block = false;
    grid[9][4].block = false;
    grid[9][5].block = false;
    grid[9][6].block = false;

    grid[9][7].block = true;
    grid[9][8].block = true;
    grid[9][9].block = true;

  }
  firstWorld() {
    this.baseWorld();
    worldFlag = 1;

    this.blockLeftWall();
    this.blockTopWall();
    this.blockBotWall();

  }
  secondWorld() {
    this.baseWorld();
    if(worldFlag === 1 || worldFlag === 10) {
      player.deltax=100;
      player.deltay=400;
    } else if(worldFlag === 3) {
      player.deltax=700;
      player.deltay=400;
    }
    worldFlag = 2;

    this.blockTopWall();
    this.blockBotWall();
  }
  
  thirdWorld() {
    this.baseWorld();

    if(worldFlag === 2) {
      player.deltax=100;
      player.deltay=400;
    } else if(worldFlag === 4) {
      player.deltax=700;
      player.deltay=400;
    }  else if(worldFlag === 11) {
      player.deltax =400;
      player.deltay=700
    }
    worldFlag = 3;

    this.blockTopWall();
    this.blockBotWall();
  }
  
  fourthWorld() {
    this.baseWorld();
    worldFlag = 4;
    
    player.deltax=100;
    player.deltay=400;
    
    this.blockTopWall();
    this.blockBotWall();
  }
  
  choiceWorld() {
    this.baseWorld();
    worldFlag = 5;
    if(playing) {
      vid.stop();
      vid.hide();
      playing = !playing;
    }
    player.deltax=400;
    player.deltay=400;
  }
  webDesign() {
    this.baseWorld();
    worldFlag = 6;
    interest++;
    player.deltax = 400;
    player.deltay = 100;

    this.blockLeftWall();
    this.blockRightWall();
    
  }
  webDesign2(){
    this.baseWorld();
    worldFlag = 62;
    interest++;
    player.deltax = 400;
    player.deltay = 100;
    
    this.blockLeftWall();
    this.blockRightWall();
    this.blockBotWall();
  }
  gameDesign() {
    
    this.baseWorld();
    worldFlag = 7;
    interest++;
    player.deltax = 700;
    player.deltay = 400;
    this.blockTopWall();
    this.blockBotWall();
    
  }
  gameDesign2() {
    
    this.baseWorld();
    worldFlag = 72;
    interest++;
    player.deltax = 700;
    player.deltay = 400;
    this.blockTopWall();
    this.blockBotWall();
    this.blockLeftWall();
    
  }
  appDesign() {
    
    this.baseWorld();
    worldFlag = 8;
    interest++;
    player.deltax = 100;
    player.deltay = 400;

    this.blockTopWall();
    this.blockBotWall();

  }
  appDesign2() {
    
    this.baseWorld();
    worldFlag = 82;
    interest++;
    player.deltax = 100;
    player.deltay = 400;

    this.blockTopWall();
    this.blockBotWall();
    this.blockRightWall();

  }
  introCode() {
    
    this.baseWorld();
    worldFlag = 9;
    interest++;
    player.deltax = 400;
    player.deltay = 700;
    
    this.blockRightWall();
    this.blockLeftWall();
  }
  introCode2() {
    this.baseWorld();
    worldFlag = 92;
    interest++;
    player.deltax = 400;
    player.deltay = 700;
  
    this.blockRightWall();
    this.blockLeftWall();
    this.blockTopWall();
  }
  
  curiousWorld() {
    this.baseWorld();
    worldFlag = 10;
    curious = true;
    
    player.deltax = 700;
    player.deltay = 400;
    this.blockLeftWall();
    this.blockTopWall();
    this.blockBotWall();
  }
  
  inquiryWorld() {
    this.baseWorld();
    worldFlag  = 11;
    investigative = true;
    
    player.deltax = 400;
    player.deltay = 100;
    this.blockBotWall();
    this.blockLeftWall();
    this.blockRightWall();
  }
  //BLOCKING OFF WALLS CODE//
  blockLeftWall() {
    grid[0][3].block = true;
    grid[0][4].block = true;
    grid[0][5].block = true;
    grid[0][6].block = true;
  }
  blockRightWall() {
    grid[9][3].block = true;
    grid[9][4].block = true;
    grid[9][5].block = true;
    grid[9][6].block = true;
  }
  blockTopWall() {
    grid[3][0].block = true;
    grid[4][0].block = true;
    grid[5][0].block = true;
    grid[6][0].block = true;
  }
  blockBotWall() {
    grid[3][9].block = true;
    grid[4][9].block = true;
    grid[5][9].block = true;
    grid[6][9].block = true;
  }
}
