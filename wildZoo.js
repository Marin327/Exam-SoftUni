public class Zoo {
 
    static class Animal {
        String name;
        int food;
        String area;
 
        public Animal(String name, int food, String area) {
            this.name = name;
            this.food = food;
            this.area = area;
        }
 
        public String getName() {
            return name;
        }
 
        public void setName(String name) {
            this.name = name;
        }
 
        public int getFood() {
            return food;
        }
 
        public void setFood(int food) {
            this.food = food;
        }
 
        public String getArea() {
            return area;
        }
 
        public void setArea(String area) {
            this.area = area;
        }
    }
 
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
 
        String input = scanner.nextLine();
 
        Map<String, Animal> mapAnimals = new LinkedHashMap<>();
        Map<String, Integer> hungryAnimals = new LinkedHashMap<>();
 
        while (!input.equals("EndDay")) {
            String[] arr = input.split("[: -]+");
            switch (arr[0]) {
                case "Add":
                    handleAdd(mapAnimals, arr[1], Integer.parseInt(arr[2]), arr[3], hungryAnimals);
                    break;
                case "Feed":
                    handleFeed(mapAnimals, arr[1], Integer.parseInt(arr[2]), hungryAnimals);
                    break;
                default:
                    break;
 
            }
 
 
            input = scanner.nextLine();
        }
 
        System.out.println("Animals:");
        mapAnimals.entrySet().forEach(e -> System.out.println(e.getKey() + " -> " + e.getValue().getFood() + "g"));
        System.out.println("Areas with hungry animals:");
        hungryAnimals.entrySet().forEach(e -> System.out.println(e.getKey() + ": " + e.getValue()));
    }
 
 
    private static void handleAdd(Map<String, Animal> mapAnimals, String name, int foodQuantity, String area, Map<String, Integer> hungryAnimals) {
        if (!mapAnimals.containsKey(name)) {
            Animal animal = new Animal(name, foodQuantity, area);
            mapAnimals.put(name, animal);
        } else {
            int oldFoodQuantity = mapAnimals.get(name).getFood();
            mapAnimals.get(name).setFood(foodQuantity + oldFoodQuantity);
        }
        if (!hungryAnimals.containsKey(area)) {
            hungryAnimals.put(area, 1);
        } else {
            int countValue = hungryAnimals.get(area);
            hungryAnimals.put(area, countValue + 1);
        }
    }
 
    private static void handleFeed(Map<String, Animal> mapAnimals, String name, int foodQuantity, Map<String, Integer> hungryAnimals) {
        Animal animal = mapAnimals.get(name);
        if (mapAnimals.containsKey(name)) {
            int foodNeeded = animal.getFood();
            int feedResult = foodNeeded - foodQuantity;
            if (feedResult > 0) {
                animal.setFood(feedResult);
            } else {
                System.out.println(name + " was successfully fed");
                String livingArea = animal.getArea();
                int value = hungryAnimals.get(livingArea);
                hungryAnimals.put(livingArea, value - 1);
                if (hungryAnimals.get(livingArea) == 0){
                    hungryAnimals.remove(livingArea);
                }
                mapAnimals.remove(name);
            }
        }
    }
}