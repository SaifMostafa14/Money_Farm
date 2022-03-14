AS OF 3/14/2022

Essentially a recreation of Dr. Eckroth's example from class with minor changes
1. Table syntax -> added <th> had to be a subsection of <tr> in order for the table to work properly
2. Moved <script> inside <div> because React was reading the code out of order. This fixed issues related to DOM (idk what that is but it worked)
3. Added a bootstrap style sheet in lines 4-9. That's how I got the table to look like an actual table
4. Added <"root"> to <div>, I think it helps connect the pages?
5. Added a column called "Subtypes" so we know which accounts are checking, saving, etc
