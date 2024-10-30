import { LightningElement, track } from 'lwc';

export default class Alert extends LightningElement {
    @track riceStock = 50; // Simulated current stock level
    @track lowStockThreshold = 100; // Threshold for low stock
    @track isLowStock = false; // Track if stock is low
    @track alertMessage; // Message to display in the alert

    connectedCallback() {
        this.checkStockLevel();
    }

    checkStockLevel() {
        if (this.riceStock < this.lowStockThreshold) {
            this.isLowStock = true;
            this.alertMessage = `Warning: Only ${this.riceStock} kg of rice left! Please replenish stock.`;
        } else {
            this.isLowStock = false;
        }
    }
}
