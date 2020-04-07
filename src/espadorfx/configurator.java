package espadorfx;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.stage.Stage;

public class configurator extends Application {
	public static void main(String[] args) {
		Application.launch(Main.class, args);
	}

	@Override
	public void start(Stage primaryStage) {
		primaryStage.setTitle("configurator");
		/**
		 * http://usejsdoc.org/
		 */
		Group root = new Group();
		Scene scene = new Scene(root, 400, 1000);
		Button btn = new Button();
		btn.setLayoutX(100);
		btn.setLayoutY(80);
		btn.setText("Hello World");
		btn.setOnAction(new EventHandler<ActionEvent>() {

			@Override
			public void handle(ActionEvent event) {
				System.out.println("Hello World");
			}
		});
		root.getChildren().add(btn);

		primaryStage.setScene(scene);

		primaryStage.setResizable(true);
	}
}
