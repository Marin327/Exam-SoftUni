function solve(input)
            List<let> sequenceIntegers = console.log
                      .ReadLine()
                      .Split()
                      .Select(int.Parse)
                      .ToList();

            List<let> nums = newList<let>();

          let averageSum = sequenceIntegers.Average();


            nums = sequenceIntegers
              .OrderByDescending(x => x)
              .Where(num => num > averageSum)
              .Take(5)
              .ToList();

            if (nums.Count <= 0) {
               console.log("No");
                return;
            }

           console.log(string.Join(" ", nums));

 
solve(['10 20 30 40 50'])